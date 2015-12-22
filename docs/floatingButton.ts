import {Component, View} from 'angular2/core';
import {BdFloatingButton, BdIcon} from '../index';

@Component({
  selector: 'bd-floating-button-docs',
  directives: [BdFloatingButton, BdIcon],
  template: `
    <div>
      <bd-floating-button>
        <bd-icon>add</bd-icon>
      </bd-floating-button>
      <bd-floating-button
        size="large">
        <bd-icon>add</bd-icon>
      </bd-floating-button>
      <bd-floating-button
        disabled="true"
        >
        <bd-icon>add</bd-icon>
      </bd-floating-button>
    </div>
  `
})
export default class BdFloatingButtonDocs {

}
