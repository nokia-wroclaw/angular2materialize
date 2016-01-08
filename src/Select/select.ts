import {Component, EventEmitter} from 'angular2/core';
import {OnChanges, SimpleChange} from 'angular2/core';
import {ContentChild, AfterContentInit} from 'angular2/core';
import {TemplateRef, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import FocusOnShow from './focusOnShow';
import {BdVRepeat, BdItemTemplate} from '../VRepeat/vrepeat';

import {BdOptionTemplate} from './option-template';
export {BdOptionTemplate};

import * as _ from 'lodash';

import './_select.scss';

@Component({
  selector: 'bd-select',
  inputs: ['value', 'options', 'itemText'],
  outputs: ['valueChange'],
  directives: [CORE_DIRECTIVES, BdVRepeat, BdItemTemplate, FocusOnShow],
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
        [style.display]="isPopupOpen ? 'block' : 'none'"
        class="select__popup">
        <input
          type="text"
          placeholder="Type to search"
          [(ngModel)]="searchPhrase"
          (keydown)="keydown($event)"
          class="select__popup__input"
          focusOnShow>
          <bd-v-repeat 
            [options]="visibleOptions" 
            (itemClicked)="optionClicked($event)">
            <template #item="$item" bdItemTemplate [template]="optionTemplate">
            </template>
          </bd-v-repeat>
      </div>
    </div>
  `
})
export class BdSelect implements AfterContentInit, OnChanges {
  public options: Array<any>;
  public visibleOptions: Array<any>;
  
  public isPopupOpen: boolean;
  public valueChange: EventEmitter<any>;
 
  public optionTemplate: TemplateRef; 
  @ContentChild(BdOptionTemplate) optionTemplateChild: BdOptionTemplate;

  public itemText: string;
  public itemTextFunction: Function;

  public value: any;
  private _searchPhrase: string;
  private nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    // this.changeDetectorRef.detach();
    this.nativeElement = elementRef.nativeElement;
    this.valueChange =  new EventEmitter();

    this._searchPhrase = '';
    this.isPopupOpen = false;
    // this.visibleOptions = [];
  }

  optionClicked(item) {
    console.log('Jupi bd-select ', item);
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

  // private initOptions() {
  //   this.options = this.optionsContent.toArray();
  //   this.visibleOptions = this.optionsContent.toArray();

  //   for(let option of this.options) {
  //     option.parent = this;
  //   }
  //   if(!this.value) {
  //     return;
  //   }

  //   this.searchPhrase = '';
  //   this.selectedOption = this.options.find((option) => option.value === this.value);
  //   this.selectedOption.selected = true;
  //   this.selectedOptionIndex = this.visibleOptions.indexOf(this.selectedOption);
  // }


//   set options(options: Array<any>) {
//     this._options = options;
//     this.visibleOptions = options;
//     this._searchPhrase = '';

//     // this.changeDetectorRef.detectChanges();
//   }
  

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
      this.itemTextFunction = new Function('item', `return ${this.itemText}`);
    }
  }

  ngAfterContentInit() {
    this.optionTemplate = this.optionTemplateChild.getTemplate();
  }
}
