import {Component} from 'angular2/core';
import {BdTooltip, BdIcon} from 'angular2materialize';

@Component({
  selector: 'bd-tooltip-docs',
  directives: [BdTooltip, BdIcon],
  template: `
    <bd-icon [bdTooltip]="'I am tooltip'" [position]="'right'" [delay]="'50'" >free_breakfast</bd-icon>
  `
})
export class BdTooltipDocs {
}
