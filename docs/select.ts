import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BdSelect, BdOption, BdInputContainer} from 'angular2-material';
import * as _ from 'lodash';

const loremIpsumOptions = _.unique(`Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor
  fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis.
  Nullam quis risus eget urna mollis ornare vel eu leo.  Duis mollis, est non commodo luctus, nisi erat porttitor
  ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus
  porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit
  amet fermentum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed
  odio dui. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Duis mollis, est non commodo luctus,
  nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
  .replace(/\.|,/g, '').toLowerCase().split(' '));

@Component({
  selector: 'bd-select-docs',
  directives: [BdSelect, BdOption, CORE_DIRECTIVES, BdInputContainer],
  template: `
  <div>
    <p>
      <span>Select with options in form of a simple array <pre>[value: number]:string</pre></span>
    </p>
    <bd-input-container>
      <bd-select (valueChange)="firstSelectValue=$event">
        <bd-option *ngFor="#option of arrayOptions; #i=index" [value]="i" [searchValue]="option">
          <p>{{option}}</p>
        </bd-option>
      </bd-select>
    </bd-input-container>
    <p><span>Selected value is: </span><strong>{{firstSelectValue}}</strong></p>

    <hr>
    <p>
    <span>Select with options in form of a array of simple objects <pre>[value: string]:string</pre></span>
    </p>
    <bd-select (valueChange)="secondSelectValue=$event">
      <bd-option *ngFor="#option of arrayOfObjects" [value]="option" [searchValue]="option.name">
      </bd-option>
    </bd-select>
    <p><span>Selected value is: </span><strong>{{secondSelectValue | json}}</strong></p>
  </div>`
})
export default class BdSelectDocs {
  public arrayOptions: Array<string> = loremIpsumOptions;

  public arrayOfObjects = [
    {name: 'apple', dest: 'Apple - a doctor away sender'},
    {name: 'orange', dest: 'A bit old Orange'},
    {name: 'kiwi', dest: 'Juicy Kiwi'},
    {name: 'mango', dest: 'Yellow mango'},
    {name: 'durian', dest: 'Durian - only for hardcore people'}
  ];

  public firstSelectValue = 1;
  public secondSelectValue = this.arrayOfObjects[2];
}
