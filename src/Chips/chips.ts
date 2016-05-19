import {Component, EventEmitter} from '@angular/core';
import {BdChip, BdIcon} from 'angular2materialize';

@Component({
  selector: BdChips.toString(),
  directives: [BdChip, BdIcon],
  template: `
    <div>
      <bd-chip *ngFor="#item of items; #i = index" [removeChipOnClick]="false">
        {{item}}
        <bd-icon (click)="onRemove.emit(i)">close</bd-icon>
      </bd-chip>
    </div>
  `,
  inputs: ['items'],
  outputs: ['onRemove']
})
export class BdChips {

  public onRemove: EventEmitter<number> = new EventEmitter<number>();

  public static toString(): string {
    return 'bd-chips';
  }
}
