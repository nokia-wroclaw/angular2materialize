import {Component, Host, AfterViewInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {BdAccordion} from './accordion';

@Component({
  selector: BdAccordionGroup.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div class="accordion-group" [ngClass]="{'active': isActive}" (click)="toggle()">
      <ng-content select=".collapsible-header"></ng-content>
      <ng-content select=".collapsible-body"></ng-content>
    </div>
  `,
  inputs: ['isActive'],
})


export class BdAccordionGroup implements AfterViewInit {

  public isActive: boolean = false;

  constructor(@Host() private accordion: BdAccordion) { }

  ngAfterViewInit() {
    this.accordion.addGroup(this);
  }
  public toggle() {
    this.accordion.toggle(this);
  }

  public static toString(): string {
    return 'bd-accordion-group';
  }

}
