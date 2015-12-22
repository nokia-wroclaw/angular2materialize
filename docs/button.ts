import {Component, View} from 'angular2/core';
import {BdButton} from '../index';

@Component({
  selector: 'bd-button-docs',
  directives: [BdButton],
  template: `
    <div>
      <bd-button
        size="large"
        >
        Click button
      </bd-button>
      <bd-button>
        Click button2
      </bd-button>
      <bd-button
        disabled="true"
        >
        disabled
      </bd-button>
    </div>
  `
})
export default class BdButtonDocs {

}
