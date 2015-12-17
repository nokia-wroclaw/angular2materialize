import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdIcon.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <i class="material-icons">
      <ng-content></ng-content>
    </i>
  `,

})
export default class BdIcon {

  public static toString(): string {
    return 'bd-icon';
  }
}
