import {Component, View} from 'angular2/core';
import {BdChip, BdIcon} from '../index';

@Component({
  selector: 'bd-chip-docs',
  directives: [BdIcon, BdChip],
  template: `
    <${BdChip}>
      <img src="http://materializecss.com/images/yuna.jpg" />
      Jane Doe
    </${BdChip}>
    <${BdChip}>
       Tag
       <${BdIcon}>close</${BdIcon}>
    </${BdChip}>

  `
})
export default class BdChipDocs {

}
