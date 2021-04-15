import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdCard.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div
      [class.card]="true"
      [ngClass]="classes"
      >
      <ng-content></ng-content>
    </div>
  `,
  inputs: ['size']
})
export class BdCard {

  public size: string;
  private __classes: any = {
    small: this.size === 'small',
    medium: this.size === 'medium',
    large: this.size === 'large'
  };

  static toString(): string {
    return 'bd-card';
  }

  get classes() {
    return this.__classes;
  }
}
