import {Component, ElementRef, EventEmitter, ContentChildren, AfterContentInit, QueryList} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import FocusOnShow from './focusOnShow';
import {BdOption} from './option';
import * as _ from 'lodash';
import Dictionary = _.Dictionary;

import './_select.scss';

@Component({
  selector: BdSelect.toString(),
  directives: [CORE_DIRECTIVES, FocusOnShow],
  template: `
    <div class="select__mainContainer select-wrapper">
      <span class="caret">▼</span>
      <input
        (click)="isPopupOpen=true"
        (mousedown)="$event.preventDefault()"
        class="select__mainLabel"
        type="text"
        readonly="true"
        [value]="selectedOption?.searchValue">
      <div
        *ngIf="isPopupOpen"
        class="select__popup">
        <input
          type="text"
          placeholder="Type to search"
          [(ngModel)]="searchPhrase"
          (keydown)="keydown($event)"
          class="select__popup__input"
          focusOnShow>
        <ul class="select__popup__ul dropdown-content">
          <ng-content></ng-content>
        </ul>
      </div>
    </div>
  `,
  inputs: ['value'],
  outputs: ['valueChange']
})
export class BdSelect implements AfterContentInit {
  @ContentChildren(BdOption) optionsContent: QueryList<BdOption>;
  public options: Array<BdOption>;
  public visibleOptions: Array<BdOption>;

  public value: any;
  public isPopupOpen: boolean;
  public valueChange: EventEmitter<string>;
  public selectedOption: BdOption;
  public selectedOptionIndex: number;

  private _searchPhrase: string;
  private nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this._searchPhrase = '';
    this.isPopupOpen = false;
    this.selectedOptionIndex = 0;
    this.valueChange =  new EventEmitter();

    this.nativeElement = elementRef.nativeElement;
  }

  selectOption(option: BdOption) {
    this.visibleOptions[this.selectedOptionIndex].selected = false;

    this.isPopupOpen = false;
    this.valueChange.emit(option.value);

    this.selectedOption = option;
    this.selectedOptionIndex = this.visibleOptions.indexOf(option);

    this.selectedOption.selected = true;
  }

  keydown(event: KeyboardEvent) {
    switch(event.which) {
      case 13: //enter
        this.isPopupOpen = false;
        this.selectedOption = this.visibleOptions[this.selectedOptionIndex];
        this.valueChange.emit(this.selectedOption.value);
        break;
      case 27: //escape
        this.isPopupOpen = false;
        break;
      case 38: //arrow up
        event.preventDefault();
        this.changeSelectedOption(-1);
        this.scrollToSelectedOption();
        break;
      case 40: //arrow down
        event.preventDefault();
        this.changeSelectedOption(1);
        this.scrollToSelectedOption(false);
        break;
      }
  }

  private scrollToSelectedOption(toTop = true) {
    const selectedOption = this.nativeElement.querySelectorAll(`ul li`)[this.selectedOptionIndex];
    const selectedOptionRect = selectedOption.getBoundingClientRect();
    const ul = this.nativeElement.querySelector('ul');
    const ulRect = ul.getBoundingClientRect();

    const top = selectedOptionRect.top - ulRect.top;
    const bottom = selectedOptionRect.bottom - ulRect.top;
    if (top < 0 || bottom > ulRect.height) {
      if (toTop) {
        ul.scrollTop = ul.scrollTop + top;
      } else {
        ul.scrollTop = ul.scrollTop + (bottom - ulRect.height);
      }
    }
  }

  private changeSelectedOption(positionChange: number) {
    this.visibleOptions[this.selectedOptionIndex].selected = false;
    let nextPosition = this.selectedOptionIndex + positionChange;
    if (nextPosition < 0) {
      nextPosition = this.visibleOptions.length - 1;
    }
    if (nextPosition >= this.visibleOptions.length) {
      nextPosition = 0;
    }

    this.selectedOptionIndex = nextPosition;
    this.visibleOptions[this.selectedOptionIndex].selected = true;
  }

  private initOptions() {
    this.options = this.optionsContent.toArray();
    this.visibleOptions = this.optionsContent.toArray();

    for(let option of this.options) {
      option.parent = this;
    }
    if(!this.value) {
      return;
    }

    this.searchPhrase = '';
    this.selectedOption = this.options.find((option) => option.value === this.value);
    this.selectedOption.selected = true;
    this.selectedOptionIndex = this.visibleOptions.indexOf(this.selectedOption);
  }

  ngAfterContentInit() {
    this.initOptions();
    this.optionsContent.changes.subscribe(() => this.initOptions());
  }

  set searchPhrase(value: string) {
    this._searchPhrase = value;

    if(!!this.visibleOptions[this.selectedOptionIndex]) {
      this.visibleOptions[this.selectedOptionIndex].selected = false;
    }
    this.selectedOptionIndex = 0;

    const filterExpr = new RegExp(value, 'i');
    this.visibleOptions = this.options.filter((option) => option.searchValue.search(filterExpr) !== -1);

    this.visibleOptions.forEach((option) => option.visible = true);
    _.without.apply(_, [this.options].concat(this.visibleOptions)).forEach((option) => option.visible = false);

    if(!!this.visibleOptions[this.selectedOptionIndex]) {
      this.visibleOptions[this.selectedOptionIndex].selected = true;
    }
  }

  get searchPhrase() {
    return this._searchPhrase;
  }

  static toString(): string {
    return 'bd-select';
  }
}
