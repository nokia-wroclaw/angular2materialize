import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdIcon.toString(),
  directives: [CORE_DIRECTIVES],
  inputs: ['size'],
  template: `
    <i [ngClass]="classes">
      <ng-content></ng-content>
    </i>
  `
})
export class BdIcon {
  private static TINY:string = 'tiny';
  private static SMALL:string = 'small';
  private static MEDIUM:string = 'medium';
  private static LARGE:string = 'large';
  private __size:string;
  private __classes:any = {
    'material-icons': true,
    's12': true
  };

  get classes() {
    return this.__classes;
  }

  public static toString():string {
    return 'bd-icon';
  }

  set size(size:string) {
    this.__size = size;
    this.classes[BdIcon.TINY] = BdIcon.TINY === size;
    this.classes[BdIcon.SMALL] = BdIcon.SMALL === size;
    this.classes[BdIcon.MEDIUM] = BdIcon.MEDIUM === size;
    this.classes[BdIcon.LARGE] = BdIcon.LARGE === size;
  }

  get size() {
    return this.__size;
  }
}
