import {Component, EventEmitter} from '@angular/core';
import {OnChanges, SimpleChange} from '@angular/core';
import {ContentChild, AfterContentInit} from '@angular/core';
import {TemplateRef} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {FocusOnShow} from './focusOnShow';
import {BdVRepeat, BdItemTemplate} from '../VRepeat/vrepeat';

import {BdOptionTemplate} from './option-template';
export {BdOptionTemplate};

import './select.scss';

const DEFAULT_ITEM_TEXT_FUNCTION = new Function('$item', 'return $item;');

@Component({
  selector: 'bd-select',
  inputs: ['value', 'options', 'itemText', 'placeholder'],
  outputs: ['valueChange', 'blur'],
  directives: [CORE_DIRECTIVES, BdVRepeat, BdItemTemplate, FocusOnShow],
  template: `
    <div *ngIf="isVisible" class="select__mainContainer select-wrapper">
      <span class="caret">▼</span>
      <input
        type="text"
        readonly="true"
        class="select__mainLabel"
        (click)="isPopupOpen=true"
        (mousedown)="$event.preventDefault()"
        [placeholder]="placeholder"
        [value]="selectedOptionText">
      <div
        *ngIf="isPopupOpen"
        class="select__popup">
        <input
          (blur)="blur.emit(null)"
          type="text"
          class="select__popup__input"
          placeholder="Type to search"
          [(ngModel)]="searchPhrase"
          (keydown)="keydown($event)"
          focusOnShow>
          <bd-v-repeat 
            [items]="visibleOptions" 
            (itemClicked)="optionClicked($event)"
            [selectedItem]="selectedOption"
            [scrollToSelection]="true"
            [template]="optionTemplate">
            <template #item="$item" bdItemTemplate>
              <span>{{item}}</span>
            </template>
          </bd-v-repeat>
      </div>
    </div>
  `
})
export class BdSelect implements AfterContentInit, OnChanges {
  public placeholder: string;
  public options: Array<any>;
  public visibleOptions: Array<any>;

  public isPopupOpen: boolean;
  public isVisible: boolean;
  public selectedOptionText: string;
  public value: any;
  public valueChange: EventEmitter<any>;
  public blur: EventEmitter<any>;

  public selectedOption: any;
  private selectedOptionIndex: number;

  public optionTemplate: TemplateRef<any>;
  @ContentChild(BdOptionTemplate) optionTemplateChild: BdOptionTemplate;

  public itemText: string;
  public itemTextFunction: Function;

  private _searchPhrase: string;

  constructor() {
    this.valueChange = new EventEmitter<any>();
    this.blur = new EventEmitter<any>(false);
    this._searchPhrase = '';
    this.placeholder = '';
    this.isPopupOpen = false;
    this.isVisible = true;
    this.visibleOptions = [];
    this.selectedOptionText = '';
    this.selectedOptionIndex = 0;
    this.itemTextFunction = DEFAULT_ITEM_TEXT_FUNCTION;
  }

  optionClicked(item: any) {
    this.valueChange.emit(item);
    this.value = item;
    this.selectedOptionText = this.itemTextFunction(item);
    this.isPopupOpen = false;
  }

  keydown(event: KeyboardEvent) {
    switch (event.which) {
      case 13: //enter
        this.isPopupOpen = false;
        this.optionClicked(this.selectedOption);
        break;
      case 27: //escape
        this.isPopupOpen = false;
        break;
      case 38: //arrow up
        event.preventDefault();
        this.changeSelectedOption(-1);
        break;
      case 40: //arrow down
        event.preventDefault();
        this.changeSelectedOption(1);
        break;
    }
  }

  set searchPhrase(value: string) {
    this._searchPhrase = value;
    this.visibleOptions = this.options;

    const filterExpr = new RegExp(value, 'i');
    this.visibleOptions = this.options.filter((option) => this.itemTextFunction(option).search(filterExpr) !== -1);

    this.selectedOptionIndex = 0;
    this.selectedOption = this.visibleOptions[this.selectedOptionIndex];
  }

  get searchPhrase() {
    return this._searchPhrase;
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes['options'] && changes['options'].currentValue) {
      this.visibleOptions = this.options;
      this._searchPhrase = '';

      this.selectedOptionIndex = 0;
      this.selectedOption = this.visibleOptions[this.selectedOptionIndex];
    }
    if (changes['itemText'] && changes['itemText'].currentValue) {
      this.itemTextFunction = new Function('$item', `return ${this.itemText};`);
    }
  }

  ngAfterContentInit() {
    if (this.optionTemplateChild) {
      this.optionTemplate = this.optionTemplateChild.getTemplate();
    }
  }

  private changeSelectedOption(positionChange: number) {
    let nextPosition = this.selectedOptionIndex + positionChange;
    if (nextPosition < 0) {
      nextPosition = this.visibleOptions.length - 1;
    }
    if (nextPosition >= this.visibleOptions.length) {
      nextPosition = 0;
    }

    this.selectedOptionIndex = nextPosition;
    this.selectedOption = this.visibleOptions[this.selectedOptionIndex];
  }
}
