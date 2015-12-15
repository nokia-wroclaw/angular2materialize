import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import './_list.scss';

@Component({
  selector: List.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
  <ul class="collection">
      <ng-content></ng-content>
    </ul>
  `
})
export default class List {

  public static toString():string {
    return 'bd-list';
  }

}
