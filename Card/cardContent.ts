import {Component} from 'angular2/core';

import './_cardContent.scss';

@Component({
  selector: CardContent.toString(),
  template: `
    <div [class.card-content]="true">
      <ng-content></ng-content>
    </div>
  `
})
export default class CardContent {

  static toString():string {
    return 'bd-card-content';
  }
}