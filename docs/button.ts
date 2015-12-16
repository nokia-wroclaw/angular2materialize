import {Component, View} from 'angular2/core';
import Button from '../Button/button.ts';

@Component({
  selector: 'bd-button-docs',
  directives: [Button],
  template: `
    <div>
      <bd-button
        isLarge="true"
        >
        Click button
      </bd-button>
      <bd-button
        isLarge="false"
        >
        Click button2
      </bd-button>

    </div>
  `
})
export default class ButtonDocs {
  
}
