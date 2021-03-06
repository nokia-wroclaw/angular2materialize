import {Component} from 'angular2/core';
import {BdCard, BdCardAction, BdCardContent, BdCardImage, BdCardTitle} from 'angular2materialize';

@Component({
  selector: 'bd-card-docs',
  directives: [BdCard, BdCardAction, BdCardContent, BdCardImage, BdCardTitle],
  template: `
    <div>
      <bd-card [size]="'small'">
        <bd-card-image>
          <img src="images/sample-1.jpg">
          <bd-card-title>Card Title</bd-card-title>
        </bd-card-image>
        <bd-card-content>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </bd-card-content>
        <bd-card-action>
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </bd-card-action>
      </bd-card>
    </div>
  `
})
export class BdCardDocs {
}
