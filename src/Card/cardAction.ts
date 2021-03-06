import {Component} from 'angular2/core';

@Component({
  selector: BdCardAction.toString(),
  template: `
    <div [class.card-action]="true">
      <ng-content></ng-content>
    </div>
  `
})
export class BdCardAction {

  static toString(): string {
    return 'bd-card-action';
  }
}
