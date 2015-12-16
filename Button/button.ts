import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import '../materialize';
import './_button.scss';

@Component({
  selector: Button.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <button 
      [disabled]="disabled"
      [ngClass]="classes"
      (click)="click.emit($event)"
      >
      <ng-content></ng-content>
    </button>
  `,
  inputs: ['disabled', 'size', 'isFlat'],
  outputs: ['click']
})
export default class Button {

  public static LARGE: string = 'large';

  public disabled: boolean = false;

  public isFlat: boolean = false;

  private __size: string = '';

  private __classes: any = {
    'btn': true,
    'waves-effect': true,
    'waves-light': true,
    'disabled': this.disabled,
    'btn-large': this.size === Button.LARGE,
    'btn-flat': this.isFlat
  };

  public static toString(): string {
    return 'bd-button';
  }

  public click: EventEmitter<any>;

  constructor() {
    this.click = new EventEmitter<any>();
  }

  set size(size: string) {
    this.__size = size;
    this.classes['btn-large'] = size === Button.LARGE;
  }

  get size() {
    return this.__size;
  }

  get classes() {
    return this.__classes;
  }

}

