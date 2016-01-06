import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdInputContainer.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div [ngClass]="classes">
      <ng-content></ng-content>
    </div>
  `
})
export default class BdInputContainer {

  private __classes: any = {
    'input-field': true,
    'col': true,
    's12': true
  };

  get classes() {
    return this.__classes;
  }

  public static toString():string {
    return 'bd-input-container';
  }
}
