import {BdList, BdListItem} from 'angular2-material';
import {Component, View} from 'angular2/core';

@Component({
  selector: 'bd-list-docs',
  directives: [BdList, BdListItem],
  template: `
    <div>
      <bd-list>
        <bd-list-item>dupa1</bd-list-item>
        <bd-list-item>dupa2</bd-list-item>
      </bd-list>
    </div>
  `
})
export default class BdListDocs {

}
