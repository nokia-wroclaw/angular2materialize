import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {BdAccordion, BdAccordionGroup, BdButton} from 'angular2materialize';

@Component({
  selector: 'bd-accordion-docs',
  directives: [BdAccordion, BdAccordionGroup, BdButton],
  template: `
    <bd-button (click)="accordion.collapseAll()">Collapse all</bd-button>
    <bd-button (click)="accordion.openAll()">Open all</bd-button>
    <bd-accordion type="accordion" >
      <bd-accordion-group [isActive]="true">
        <div class="collapsible-header">
          <i class="material-icons">filter_drama</i>First</div>
        <div class="collapsible-body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </bd-accordion-group>
      <bd-accordion-group [isActive]="false">
        <div class="collapsible-header">
          <i class="material-icons">place</i>Second</div>
        <div class="collapsible-body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </bd-accordion-group>
      <bd-accordion-group [isActive]="false">
        <div class="collapsible-header">
          <i class="material-icons">whatshot</i>Third</div>
        <div class="collapsible-body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </bd-accordion-group>
  `
})
export class BdAccordionDocs {

  @ViewChild(BdAccordion) public accordion: BdAccordion;
}
