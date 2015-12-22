import {Component} from 'angular2/core';
import Select2 from '../Select2/select2';

@Component({
  selector: 'bd-select2-docs',
  directives: [Select2],
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
export default class SelectDocs {

  public arrayOptions: Array<string> = ['Apple', 'Orange', 'Kiwi', 'Mango', 'Durian'];

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
