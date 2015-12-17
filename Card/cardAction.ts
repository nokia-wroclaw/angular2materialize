import {Component} from 'angular2/core';

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
