import {Component, View} from 'angular2/core';
import {BdIcon} from 'angular2materialize';

@Component({
  selector: 'bd-icon-docs',
  directives: [BdIcon],
  template: `
    <bd-icon size="tiny">add</bd-icon>
    <bd-icon size="small">add</bd-icon>
    <bd-icon size="medium">add</bd-icon>
    <bd-icon size="large">add</bd-icon>
  `
})
export class BdIconDocs {
}
