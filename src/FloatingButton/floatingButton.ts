import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdFloatingButton.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <a [ngClass]="classes">
      <ng-content></ng-content>
    </a>
  `,
  inputs: ['disabled', 'size']
})
export class BdFloatingButton {

  public static LARGE: string = 'large';

  public __disabled: boolean = false;

  private __size: string = '';

  private __classes: any = {
    'btn': true,
    'btn-floating': true,
    'waves-effect': true,
    'waves-light': true,
    'disabled': this.disabled,
    'btn-large': this.size === BdFloatingButton.LARGE
  };

  public static toString(): string {
    return 'bd-floating-button';
  }

  constructor() {
  }

  set size(size: string) {
    this.__size = size;
    this.classes['btn-large'] = size === BdFloatingButton.LARGE;
  }

  get size() {
    return this.__size;
  }

  get classes() {
    return this.__classes;
  }

  set disabled(disabled: boolean) {
    this.__disabled = disabled;
    this.classes['disabled'] = disabled;
  }

  get disabled() {
    return this.__disabled;
  }
}
