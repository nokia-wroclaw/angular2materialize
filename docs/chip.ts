import {Component, View} from 'angular2/core';
import {BdChip, BdIcon} from '../index';

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
export default class BdChipDocs {

}
