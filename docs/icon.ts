import {Component, View} from 'angular2/core';
import {BdIcon} from '../index';

@Component({
  selector: 'bd-icon-docs',
  directives: [BdIcon],
  template: `
    <bd-icon>add</bd-icon>
  `
})
export default class BdIconDocs {

}
