import {Component, View} from 'angular2/core';
import {BdIcon} from 'angular2materialize';

@Component({
  selector: 'bd-icon-docs',
  directives: [BdIcon],
  template: `
    <bd-icon>add</bd-icon>
  `
})
export class BdIconDocs {
}
