import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdSelect2.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div>
      <input placeholder="Type to search"/>
      <div class="options-container">
        <div>option 1</div>
        <div>option 2</div>
        <div>option 3</div>
      </div>
    </div>
  `,
  outputs: ['changed']
})
export default class BdSelect2 {

  public changed: EventEmitter<any>;
  public inputValue: string;

  public static toString(): string {
    return 'select2';
  }

  constructor() {
    this.changed = new EventEmitter<any>();
  }
}
