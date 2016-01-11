import {Component, EventEmitter} from 'angular2/core';
import {OnChanges, SimpleChange} from 'angular2/core';
import {ContentChild, AfterContentInit} from 'angular2/core';
import {TemplateRef, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import * as _ from 'lodash';

import FocusOnShow from './focusOnShow';
import {BdVRepeat, BdItemTemplate} from '../VRepeat/vrepeat';

import {BdOptionTemplate} from './option-template';
export {BdOptionTemplate};

import './_select.scss';

@Component({
  selector: 'bd-select',
  inputs: ['value', 'options', 'itemText', 'placeholder'],
  outputs: ['valueChange'],
  directives: [CORE_DIRECTIVES, BdVRepeat, BdItemTemplate, FocusOnShow],
  template: `
    <div class="select__mainContainer select-wrapper">
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
          type="text"
          class="select__popup__input"
          placeholder="Type to search"
          [(ngModel)]="searchPhrase"
          (keydown)="keydown($event)"
          focusOnShow>
          <bd-v-repeat 
            [options]="visibleOptions" 
            (itemClicked)="optionClicked($event)"
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
  public selectedOptionText: string;
  public value: any;
  public valueChange: EventEmitter<any>;
 
  public optionTemplate: TemplateRef; 
  @ContentChild(BdOptionTemplate) optionTemplateChild: BdOptionTemplate;

  public itemText: string;
  public itemTextFunction: Function;

  private _searchPhrase: string;
  private nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.valueChange =  new EventEmitter();

    this._searchPhrase = '';
    this.isPopupOpen = false;
    this.visibleOptions = [];
    this.selectedOptionText = '';
  }

  optionClicked(item: any) {
    this.valueChange.emit(item);
    this.value = item;
    this.selectedOptionText = this.itemTextFunction(item); 
    this.isPopupOpen = false;
  }

  // selectOption(option: BdOption) {
  //   this.visibleOptions[this.selectedOptionIndex].selected = false;

  //   this.isPopupOpen = false;
  //   this.valueChange.emit(option.value);

  //   this.selectedOption = option;
  //   this.selectedOptionIndex = this.visibleOptions.indexOf(option);

  //   this.selectedOption.selected = true;
  // }

  keydown(event: KeyboardEvent) {
    switch(event.which) {
      // case 13: //enter
      //   this.isPopupOpen = false;
      //   this.selectedOption = this.visibleOptions[this.selectedOptionIndex];
      //   this.valueChange.emit(this.selectedOption.value);
      //   break;
      case 27: //escape
        this.isPopupOpen = false;
        break;
      // case 38: //arrow up
      //   event.preventDefault();
      //   this.changeSelectedOption(-1);
      //   this.scrollToSelectedOption();
      //   break;
      // case 40: //arrow down
      //   event.preventDefault();
      //   this.changeSelectedOption(1);
      //   this.scrollToSelectedOption(false);
      //   break;
      }
  }

  // private scrollToSelectedOption(toTop = true) {
  //   const selectedOption = this.nativeElement.querySelectorAll(`ul li`)[this.selectedOptionIndex];
  //   const selectedOptionRect = selectedOption.getBoundingClientRect();
  //   const ul = this.nativeElement.querySelector('ul');
  //   const ulRect = ul.getBoundingClientRect();

  //   const top = selectedOptionRect.top - ulRect.top;
  //   const bottom = selectedOptionRect.bottom - ulRect.top;
  //   if (top < 0 || bottom > ulRect.height) {
  //     if (toTop) {
  //       ul.scrollTop = ul.scrollTop + top;
  //     } else {
  //       ul.scrollTop = ul.scrollTop + (bottom - ulRect.height);
  //     }
  //   }
  // }

  // private changeSelectedOption(positionChange: number) {
  //   this.visibleOptions[this.selectedOptionIndex].selected = false;
  //   let nextPosition = this.selectedOptionIndex + positionChange;
  //   if (nextPosition < 0) {
  //     nextPosition = this.visibleOptions.length - 1;
  //   }
  //   if (nextPosition >= this.visibleOptions.length) {
  //     nextPosition = 0;
  //   }

  //   this.selectedOptionIndex = nextPosition;
  //   this.visibleOptions[this.selectedOptionIndex].selected = true;
  // }

  set searchPhrase(value: string) {
    this._searchPhrase = value;
    this.visibleOptions = this.options;

    const filterExpr = new RegExp(value, 'i');
    this.visibleOptions = this.options.filter((option) => this.itemTextFunction(option).search(filterExpr) !== -1);


    // if(!!this.visibleOptions[this.selectedOptionIndex]) {
    //   this.visibleOptions[this.selectedOptionIndex].selected = false;
    // }
    // this.selectedOptionIndex = 0;

    // this.visibleOptions.forEach((option) => option.visible = true);
    // _.without.apply(_, [this.options].concat(this.visibleOptions)).forEach((option) => option.visible = false);

    // if(!!this.visibleOptions[this.selectedOptionIndex]) {
    //   this.visibleOptions[this.selectedOptionIndex].selected = true;
    // }
  }
  get searchPhrase() {
    return this._searchPhrase;
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if(changes['options'] && changes['options'].currentValue) {
      this.visibleOptions = this.options;
      this._searchPhrase = '';
    }
    if(changes['itemText'] && changes['itemText'].currentValue) {
      this.itemTextFunction = new Function('item', `return ${this.itemText};`);
    }
  }

  ngAfterContentInit() {
    if(this.optionTemplateChild) {
      this.optionTemplate = this.optionTemplateChild.getTemplate();
    }
  }
}
