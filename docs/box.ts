import {Component} from 'angular2/core';
import {BdBox} from 'angular2materialize';

@Component({
  selector: 'bd-box-docs',
  directives: [BdBox],
  template: `
      <img [bdBox]="'example caption'" width="200" src="images/sample-1.jpg">
  `
})
export class BdBoxDocs {
}
