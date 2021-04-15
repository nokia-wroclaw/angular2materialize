import {Component, View} from 'angular2/core';
import {BdDatePicker, BdTimePicker} from 'angular2materialize';

@Component({
  selector: 'bd-date-time-picker-docs',
  directives: [BdDatePicker, BdTimePicker],
  template: `
    <hr/>
    <div>
      <h7>pass options to date <i>params</i> from <a href="http://amsul.ca/pickadate.js/date/#options">http://amsul.ca/pickadate.js/date/#options</a></h7>
      <div class="date-inputs-container row">
        <bd-date-picker class="col s6" [(date)]='exampleDate' label="my date" [params]="exampleDateParams"></bd-date-picker>
        <bd-time-picker class="col s6" [(date)]='exampleDate' [params]="exampleTimeParams"></bd-time-picker>
      </div>
      <br>
      <span>selected date: {{exampleDate}}</span>
    </div>`
})

export class BdDateTimePickerDocs {

  exampleDate: Date = new Date();

  exampleDateParams = {
    clear: 'Delete',
  };

  exampleTimeParams = {};
}
