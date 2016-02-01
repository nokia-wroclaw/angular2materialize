import {Component, AfterViewInit, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import * as _ from 'lodash';
import * as $ from 'jquery';

@Component({
  selector: BdAccordion.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <ul class="collapsible" [attr.data-collapsible]="type">
      <ng-content></ng-content>
    </ul>
  `,
  inputs: ['type']
})
export class BdAccordion implements AfterViewInit  {

  public static ALLOWED_TYPES: Array<string> = ['expandable', 'accordion'];
  public type: string = 'expandable';

  constructor(public elementRef: ElementRef) { }

  ngAfterViewInit() {
    let accordionContainer: HTMLElement = this.elementRef.nativeElement.querySelector('.collapsible');
    this.verifyAccordionContent(accordionContainer);
  }

  public static toString(): string {
    return 'bd-accordion';
  }

  private verifyAccordionContent(collapsible: HTMLElement) {
    if(!_.every(collapsible.children, { 'tagName': 'LI'})) {
      throw new Error("only <li> elements are allowed to appear directly under BdAccordion");
    }
  }
}
