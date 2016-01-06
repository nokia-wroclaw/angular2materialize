import {Component, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {BdSelect} from './select';

@Component({
  selector: BdOption.toString(),
  template: `
  <li
     *ngIf="visible"
     [class.selected]="selected"
     (click)="selectOption($event)">
      <ng-content></ng-content>
   </li>`,
  inputs: ['value', 'searchValue'],
  directives: [CORE_DIRECTIVES]
})
export class BdOption {
  public value: any;
  public visible: boolean;
  public selected: boolean;
  public parent: BdSelect;
  public searchValue: string;
  public optionSelected: EventEmitter<BdOption>;

  constructor() {
    this.visible = true;
    this.selected = false;
  }

  selectOption(event: Event) {
    event.stopPropagation();
    this.parent.selectOption(this);
  }

  static toString() {
    return 'bd-option';
  }
}
