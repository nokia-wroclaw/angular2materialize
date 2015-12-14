import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

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

    </button>
  `,
  inputs: ['disabled', 'size', 'isFlat'],
  outputs: ['click']
})
export default class Button {

  public static LARGE : string = 'large';

  public static toString() : string {
    return 'bd-button';
  }

  public click : EventEmitter;

  constructor() {
    this.click = new EventEmitter();
  }

  get classes () {
    return {
      'btn': true,
      'waves-effect': true,
      'waves-light': true,
      'disabled': this.disabled,
      'btn-large': this.size === Button.LARGE,
      'btn-flat': this.isFlat
    };
  }

}

