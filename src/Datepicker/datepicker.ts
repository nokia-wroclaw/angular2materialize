import {Component, OnInit, ElementRef, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import * as $ from 'jquery';

@Component({
  selector: BdDatePicker.toString(),
  directives: [CORE_DIRECTIVES],
  inputs: ['date', 'params', 'label'],
  outputs: ['dateChange'],
  template: `
    <div class="input-field">
      <input class="date-input" (click)="open()" [value]='date | date' type='date' />
      <label *ngIf="!date" for="date-input" >{{label}}</label>
    </div>`
})

export class BdDatePicker implements OnInit {

  public date: Date = null;

  public label: String = 'date';

  public dateChange: EventEmitter<Date>;

  public params: Object = null;

  public static DEFAULT_PARAMS: Object = {
    selectMonths: true,
    container: document.body
  };

  private picker: any;

  constructor(public elementRef: ElementRef) {
    this.dateChange = new EventEmitter<Date>();
  }

  ngOnInit() {
    let element: Element = this.elementRef.nativeElement;
    this.registerAsDatePicker(element.querySelector('input'));
  }

  private registerAsDatePicker(element) {
    let mergedParams = {};
    Object.assign(mergedParams, BdDatePicker.DEFAULT_PARAMS, this.params,
      {
        onSet: (result) => this.onDateChange(result),
        onClose: () => element.blur()
      });
    this.initializeDatePickerWithStartingValue(element, mergedParams, this.date);
  }

  private initializeDatePickerWithStartingValue(element: Element, mergedParams: Object, date: Date) {
    let dateInput: any = $(element).pickadate(mergedParams);
    this.picker = dateInput.pickadate('picker');
    this.picker.set('select', date);
  }

  private onDateChange(dateChangeResult) {
    let selectedDate: Date = dateChangeResult.select ? this.extractDate(dateChangeResult.select) : null;
    this.dateChange.next(selectedDate);
  }

  private extractDate(selectedDate: string) {
    let newDate = new Date(selectedDate);
    if (this.date) {
      newDate.setHours(this.date.getHours(), this.date.getMinutes(), this.date.getSeconds(), this.date.getMilliseconds());
    }
    return newDate;
  }

  private open() {
    this.picker.open();
  }

  public static toString(): string {
    return 'bd-date-picker';
  }
}
