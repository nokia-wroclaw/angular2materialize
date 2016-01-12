import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdList.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
  <ul class="collection">
      <ng-content></ng-content>
    </ul>
  `
})
export class BdList {

  public static toString(): string {
    return 'bd-list';
  }

}
