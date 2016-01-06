import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdIcon.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <i [ngClass]="classes">
      <ng-content></ng-content>
    </i>
  `
})
export default class BdIcon {

  private __classes: any = {
    'material-icons': true,
    's12': true
  };

  get classes(){
    return this.__classes;
  }

  public static toString(): string {
    return 'bd-icon';
  }
}
