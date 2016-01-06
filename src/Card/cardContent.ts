import {Component} from 'angular2/core';

@Component({
  selector: BdCardContent.toString(),
  template: `
    <div [class.card-content]="true">
      <ng-content></ng-content>
    </div>
  `
})
export default class BdCardContent {

  static toString():string {
    return 'bd-card-content';
  }
}
