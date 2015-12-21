import {Component, OnInit, ElementRef, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import $ from 'jquery';

@Component({
  selector: 'bd-date-picker',
  directives: [CORE_DIRECTIVES],
  inputs: ['date', 'params'],
  outputs: ['dateChange'],
  template: `
    <div class="input-field">
      <input class="date-input" [value]='date | date' type='date' />
      <label *ngIf="!date" for="date-input" >date</label>
    </div>`
})

export default class BdDatePicker implements OnInit {

  public date: Date = null;

  public dateChange: EventEmitter<any>;

  public params: Object = null;

  public static DEFAULT_PARAMS: Object = {
    selectMonths: true,
    container: document.body
  };

  constructor(public elementRef:ElementRef) {
    this.dateChange = new EventEmitter<any>();
  }

  ngOnInit() {
    let element: Element = this.elementRef.nativeElement;
    this.registerAsDatePicker(element.querySelector('input'));
  }

  private registerAsDatePicker = (element: Element) => {
    let mergedParams = {};
    Object.assign(mergedParams, BdDatePicker.DEFAULT_PARAMS, this.params, { onSet: (result) => this.onDateChange(result) });
    $(element).pickadate(mergedParams);
  };

  private onDateChange(dateChangeResult) {
    if(!dateChangeResult.select) {
      this.dateChange.next(null);
      return;
    }
    let newDate = new Date(dateChangeResult.select);
    newDate.setHours(0, 0, 0, 0);
    this.dateChange.next(newDate);
  }

  public static toString() : string {
    return 'bd-date-picker';
  }
}
