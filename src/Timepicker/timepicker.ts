import {Component, OnInit, ElementRef, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import 'material-timepicker/dist/css/timepicker.css';
var TimePicker = require('material-timepicker');
const timePicker = new TimePicker();

@Component({
  selector: 'bd-time-picker',
  directives: [CORE_DIRECTIVES],
  inputs: ['date', 'params', 'label', 'disabled'],
  outputs: ['dateChange'],
  styles: [require('./timepicker.scss')],
  template: `
    <div class="input-field">
      <input [disabled]="disabled" [value]='date | date: "jjmm"' type='text' />
      <label *ngIf="!date">{{label}}</label>
    </div>`
})
export class BdTimePicker implements OnInit {

  public date: Date = null;

  public label: String = 'time';

  public disabled: boolean = false;

  public dateChange: EventEmitter<Date>;

  public params: Object = null;

  public static DEFAULT_PARAMS: Object = { timeFormat: 'military' };

  constructor(public elementRef: ElementRef) {
    this.dateChange = new EventEmitter<Date>();
  }

  ngOnInit() {
    let element: Element = this.elementRef.nativeElement;
    this.registerAsTimePicker(element.querySelector('input'));
  }

  private registerAsTimePicker(element: Element) {
    let mergedParams = {};
    Object.assign(mergedParams, BdTimePicker.DEFAULT_PARAMS, this.params);
    timePicker.bindInput(element, mergedParams);
    element.addEventListener('input', (event) => {
      this.onTimeSelect(event);
    });
  }

  private onTimeSelect(event) {
    let [hour, minutes] = event.target.value.split(':');
    this.date = new Date(this.date ? this.date.toString() : null);
    this.date.setHours(hour, minutes, 0, 0);
    this.dateChange.emit(this.date);
  }

  public static toString(): string {
    return 'bd-time-picker';
  }
}
