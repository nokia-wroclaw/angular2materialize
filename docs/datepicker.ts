import {Component, View} from 'angular2/core';
import {BdDatePicker} from '../index';

@Component({
  selector: 'bd-date-picker-docs',
  directives: [BdDatePicker],
  template: `
    <div>
      <h7>pass options to <i>params</i> from <a href="http://amsul.ca/pickadate.js/date/#options">http://amsul.ca/pickadate.js/date/#options</a></h7>
      <bd-date-picker [(date)]='exampleDate' [params]="exampleParams"></bd-date-picker>
      <br>
      <span>selected date: {{exampleDate}}</span>
    </div>`
})
export default class BdDatePickerDocs {

  exampleDate: Date = new Date();

  exampleParams: Object = {
    clear: 'Delete',
  };
}
