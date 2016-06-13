import {Component} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {BdAccordionGroup} from './accordionGroup';

@Component({
  selector: BdAccordion.toString(),
  directives: [CORE_DIRECTIVES],
  styles: [require('./accordion.scss')],
  template: `
    <ul class="collapsible" >
      <ng-content></ng-content>
    </ul>
  `,
  inputs: ['type']
})
export class BdAccordion {
  public static ALLOWED_TYPES: Array<string> = ['expandable', 'accordion'];
  public type: string = 'expandable';
  private groups: Array<BdAccordionGroup>;

  constructor() {
    this.groups = [];
  }

  public addGroup(bdAccordionGroup: BdAccordionGroup) {
    this.groups.push(bdAccordionGroup);
  }

  public toggle(bdAccordionGroup: BdAccordionGroup) {
    bdAccordionGroup.isActive = !bdAccordionGroup.isActive;
    if (this.type === 'accordion' && bdAccordionGroup.isActive) {
      this.groups
        .filter((group) => group !== bdAccordionGroup)
        .forEach((group: BdAccordionGroup) => group.isActive = false);
    }
  }

  public collapseAll() {
    this.groups.forEach((group: BdAccordionGroup) => group.isActive = false);
  }

  public openAll() {
    this.groups.forEach((group: BdAccordionGroup) => group.isActive = true);
  }

  public static toString(): string {
    return 'bd-accordion';
  }
}
