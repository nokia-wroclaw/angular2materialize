import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import './_listItem.scss';

@Component({
  selector: ListItem.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <li class="collection-item">
      <ng-content></ng-content>
    </li>
  `,
  inputs: [],
  outputs: []
})
export default class ListItem {

  public static toString() : string {
    return 'bd-list-item';
  }

}
