import {Component, View} from 'angular2/core';
import {BdAccordion} from 'angular2materialize';

@Component({
  selector: 'bd-accordion-docs',
  directives: [BdAccordion],
  template: `
    <bd-accordion type="accordion">
      <li>
        <div class="collapsible-header">
          <i class="material-icons">filter_drama</i>First</div>
        <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>
      <li>
        <div class="collapsible-header active"><i class="material-icons">place</i>Second</div>
        <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>
      <li >
        <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
        <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>
    </bd-accordion>
  `
})
export class BdAccordionDocs {
}
