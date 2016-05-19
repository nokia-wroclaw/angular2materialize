import {Component} from '@angular/core';
import {BdTags} from 'angular2materialize';

@Component({
  selector: 'bd-tags-docs',
  directives: [BdTags],
  template: `
  <div>
    <bd-tags [(tags)]="tags" label="Tags" [errorMessage]="tags.length===0? 'invalid': ''"></bd-tags>
  </div>
  `
})
export class BdTagsDocs {
  private tags: string[] = [
    'tag1',
    'tag2'
  ];
}
