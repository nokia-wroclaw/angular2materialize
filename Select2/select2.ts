import {Component, ElementRef, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import Select2Popup from './select2popup';
import * as _ from 'lodash';
import Dictionary = _.Dictionary;

import './_select2.scss';

@Component({
  selector: Select2.toString(),
  directives: [CORE_DIRECTIVES, Select2Popup],
  template: `
    <div class="select2__mainContainer select-wrapper">
      <span class="caret">▼</span>
      <input
        (click)="isPopupOpen=true"
        (mousedown)="$event.preventDefault()"
        (keydown)="keydown($event)"
        class="select2__mainLabel"
        tabindex="0"
        type="text"
        readonly="true"
        [value]="currentOptionLabel"
        >
      <select2popup
        [options]="options"
        [isOpen]="isPopupOpen"
        (isOpenChange)="isPopupOpen=$event"
        [value]="value"
        (valueChange)="acceptNewValue($event)"
        >
      </select2popup>
    </div>
  `,
  inputs: ['options', 'value'],
  outputs: ['valueChange']
})
export default class Select2 {
  isPopupOpen: boolean = false;

  private spanElement;

  options: Dictionary <string>;
  __value: string;
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  static toString(): string {
    return 'select2';
  }

  constructor(elRef: ElementRef) {
    this.spanElement = elRef.nativeElement.querySelector('.select2__mainLabel');
  }

  keydown(event: KeyboardEvent) {
    if (event.which === 13) { //enter
      this.isPopupOpen = true;
    }
  }

  get currentOptionLabel() {
    if (this.options && this.options[this.value]) {
      return this.options[this.value];
    }
    return '';
  }

  acceptNewValue(value) {
    this.value = value;
    this.spanElement.focus();
  }

  get value() {
    return this.__value;
  }

  set value(value: any) {
    if (value !== this.__value) {
      this.__value = value.toString();
    }
    this.valueChange.emit(this.value);
  }


}
