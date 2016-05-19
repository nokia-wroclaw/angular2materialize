import {Component} from '@angular/core';
import {BdFloatingButton, BdIcon} from 'angular2materialize';

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
export class BdFloatingButtonDocs {
}
