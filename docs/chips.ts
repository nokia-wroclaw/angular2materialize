import {Component} from 'angular2/core';
import {BdChips} from 'angular2materialize';

@Component({
  selector: 'bd-chips-docs',
  directives: [BdChips],
  template: `
  <div>
    <${BdChips}
      [items]="chips"
      (onRemove)="onRemove($event)">
    </${BdChips}>
  </div>
  `
})
export class BdChipsDocs {
  chips: string[] = [
    'Jane Doe',
    'Jane Doe',
    'Jane Doe',
    'John Wats',
    'John Wats',
    'John Wats',
  ];

  onRemove(index: number) {
    alert(`Removing element ${this.chips[index]} with index ${index}`);
    this.chips.splice(index, 1);
  }
}
