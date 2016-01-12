import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdListItem.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <li class="collection-item">
      <ng-content></ng-content>
    </li>
  `
})
export class BdListItem {

  public static toString(): string {
    return 'bd-list-item';
  }

}
