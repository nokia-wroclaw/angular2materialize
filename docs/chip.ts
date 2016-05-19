import {Component} from '@angular/core';
import {BdChip, BdIcon} from 'angular2materialize';

@Component({
  selector: 'bd-chip-docs',
  directives: [BdIcon, BdChip],
  template: `
  <div>
    <${BdChip}>
      <img src="http://materializecss.com/images/yuna.jpg" />
      Jane Doe
    </${BdChip}>
    <${BdChip}>
       Tag
       <${BdIcon}>close</${BdIcon}>
    </${BdChip}>
  </div>
  `
})
export class BdChipDocs {
}
