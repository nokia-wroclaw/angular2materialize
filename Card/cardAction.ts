import {Component} from 'angular2/core';

import './_cardAction.scss';

@Component({
  selector: CardAction.toString(),
  template: `
    <div [class.card-action]="true">
      <ng-content></ng-content>
    </div>
  `
})
export default class CardAction {

  static toString():string {
    return 'bd-card-action';
  }
}