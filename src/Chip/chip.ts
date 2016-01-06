import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdChip.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div class="chip">
      <ng-content></ng-content>
    </div>
  `,

})
export default class BdChip {

  public static toString(): string {
    return 'bd-chip';
  }
}
