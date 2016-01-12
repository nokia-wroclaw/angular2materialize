import {Component, View} from 'angular2/core';
import {BdButton} from 'angular2-material';

@Component({
  selector: 'bd-button-docs',
  directives: [BdButton],
  template: `
    <div>
      <bd-button
        size="large"
        color="blue"
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
export class BdButtonDocs {
}
