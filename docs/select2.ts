import {Component} from 'angular2/core';
import {BdSelect2} from 'angular2-material';
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
  selector: 'bd-select2-docs',
  directives: [BdSelect2],
  template: `
  <div>
    <p>
      <span>Select with options in form of a simple array <pre>[value: number]:string</pre></span>
    </p>
    <select2 [options]="arrayOptions" [(value)]="firstSelectValue">
    </select2>
    <p><span>Selected value is: </span><strong>{{firstSelectValue}}</strong></p>
    <hr>
    <p>
    <span>Select with options in form of a simple object <pre>[value: string]:string</pre></span>
    </p>
    <select2 [options]="dictionaryOptions" [(value)]="secondSelectValue">
    </select2>
    <p><span>Selected value is: </span><strong>{{secondSelectValue}}</strong></p>

    <!--<p>Select with options in form of a dictionary string=>string</p>-->
    <!--<select2 [options]="dictionaryOptions">-->
    <!--</select2>-->
  </div>`
})
export default class BdSelectDocs {

  public arrayOptions: Array<string> = loremIpsumOptions;

  public dictionaryOptions: DictionaryOptions = {
    'apple': 'Apple - a doctor away sender',
    'orange': 'A bit old Orange',
    'kiwi': 'Juicy Kiwi',
    'mango': 'Yellow mango',
    'durian': 'Durian - only for hardcore people'
  };

  public firstSelectValue = 2;

  public secondSelectValue = 'orange';

}

interface DictionaryOptions {
  [value: number]: string;
}




