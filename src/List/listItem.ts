import {Component, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

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
