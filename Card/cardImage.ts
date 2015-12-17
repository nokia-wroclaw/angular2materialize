import {Component} from 'angular2/core';

@Component({
  selector: BdCardImage.toString(),
  template: `
    <div [class.card-image]="true">
      <ng-content></ng-content>
    </div>
  `
})
export default class BdCardImage {

  static toString():string {
    return 'bd-card-image';
  }
}
