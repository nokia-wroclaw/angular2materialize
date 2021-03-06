import {Component, View} from 'angular2/core';
import {BdList, BdListItem} from 'angular2materialize';

@Component({
  selector: 'bd-list-docs',
  directives: [BdList, BdListItem],
  template: `
    <div>
      <bd-list>
        <bd-list-item>Item 1</bd-list-item>
        <bd-list-item>Item 2</bd-list-item>
      </bd-list>
    </div>
  `
})
export class BdListDocs {
}
