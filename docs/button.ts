import {Component, View} from 'angular2/core';
import Button from '../src/Button/button';

@Component({
  selector: 'bd-button-docs',
  directives: [Button],
  template: `
    <div>
      <bd-button
        isLarge="true"
        >
        Click me!
      </bd-button>
    </div>
  `
})
export default class ButtonDocs {
  
}
