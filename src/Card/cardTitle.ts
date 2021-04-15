import {Component} from 'angular2/core';

@Component({
  selector: BdCardTitle.toString(),
  template: `
    <span class="card-title">
      <ng-content></ng-content>
    </span>
  `
})
export class BdCardTitle {

  static toString(): string {
    return 'bd-card-title';
  }
}
