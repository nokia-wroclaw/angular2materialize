import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import './_card.scss';

@Component({
  selector: Card.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div
      [class.card]="true"
      [ngClass]="classes()"
      >
      <ng-content></ng-content>
    </div>
  `,
  inputs: ['size']
})
export default class Card {

  public size: string;

  static toString(): string {
    return 'bd-card';
  }

  public classes() {
    return {
      small: this.size === 'small',
      medium: this.size === 'medium',
      large: this.size === 'large'
    };
  }
}
