import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: BdButton.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <button
      [disabled]="disabled"
      [ngClass]="classes"
      >
      <ng-content></ng-content>
    </button>
  `,
  inputs: ['disabled', 'size', 'isFlat', 'color']
})
export class BdButton {

  public static LARGE: string = 'large';
  public disabled: boolean = false;
  public isFlat: boolean = false;
  private __size: string = '';
  private __classes: any = {
    'btn': true,
    'waves-effect': true,
    'waves-light': true,
    'disabled': this.disabled,
    'btn-large': this.size === BdButton.LARGE,
    'btn-flat': this.isFlat
  };

  public static toString(): string {
    return 'bd-button';
  }

  constructor() { }

  set size(size: string) {
    this.__size = size;
    this.classes['btn-large'] = size === BdButton.LARGE;
  }

  get size() {
    return this.__size;
  }

  get classes() {
    return this.__classes;
  }

  set color(color: string) {
    this.__classes[color] = true;
  }
}
