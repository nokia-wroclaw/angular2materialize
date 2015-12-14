import {List, ListItem} from '../List/index'
import {Component, View} from 'angular2/core';

@Component({
  selector: 'bd-list-docs',
  directives: [List, ListItem],
  template: `
    <div>
      <bd-list>
        <bd-list-item>dupa1</bd-list-item>
        <bd-list-item>dupa2</bd-list-item>
      </bd-list>
    </div>
  `
})
export default class ListDocs {

}
