import {Component} from 'angular2/core';

import './_cardImage.scss';

@Component({
  selector: CardImage.toString(),
  template: `
    <div [class.card-image]="true">
      <ng-content></ng-content>
    </div>
  `
})
export default class CardImage {

  static toString():string {
    return 'bd-card-image';
  }
}