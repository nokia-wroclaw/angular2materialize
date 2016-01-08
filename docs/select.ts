import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BdSelect, BdOptionTemplate} from 'angular2-material';
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
  directives: [CORE_DIRECTIVES, BdSelect, BdOptionTemplate],
  template: `
  <div>
    <bd-select 
      [options]="arrayOfObjects" 
      (valueChange)="secondSelectValue=$event"
      itemText="item.name">
      <template #item="$item" bdOptionTemplate>
        <p>
          <b>{{item.name}}</b>
          <span>{{item.dest}}</span>
        </p>
      </template>
    </bd-select>
    <p><span>Selected value is: </span><strong>{{secondSelectValue | json}}</strong></p>
  </div>
  `
})
export default class BdSelectDocs {
  public arrayOfObjects: Array<any>;
  
  constructor() {
    this.arrayOfObjects = [];
    setTimeout(() =>  { 
      this.arrayOfObjects = _.reduce(_.range(10000), (memo) => memo.concat([
        {name: 'apple', dest: 'Apple - a doctor away sender'},
        {name: 'orange', dest: 'A bit old Orange'},
        {name: 'kiwi', dest: 'Juicy Kiwi'},
        {name: 'mango', dest: 'Yellow mango'},
        {name: 'durian', dest: 'Durian - only for hardcore people'}
      ]), []);
      console.log(this.arrayOfObjects.length);
    }, 1000);
  }
}
