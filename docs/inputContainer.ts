import {BdInputContainer, BdIcon} from 'angular2-material';
import {Component, View} from 'angular2/core';

@Component({
  selector: 'bd-input-container-docs',
  directives: [BdInputContainer, BdIcon],
  template: `
    <div>
      <bd-input-container>
        <label for="name">Name</label>
        <input id="name" type="text">
      </bd-input-container>
    </div>
    <div>
      <bd-input-container>
        <bd-icon class="prefix">account_circle</bd-icon>
        <label>Name</label>
        <input type="text">
      </bd-input-container>
    </div>
  `
})
export default class BdInputContainerDocs {

}
