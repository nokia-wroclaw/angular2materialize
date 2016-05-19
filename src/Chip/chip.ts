import {Component, OnInit, ElementRef} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: BdChip.toString(),
  template: `
    <div class="chip">
      <ng-content></ng-content>
    </div>
  `,
  inputs: ['removeChipOnClick']
})
export class BdChip implements OnInit {

  public removeChipOnClick: boolean = true;

  public static toString(): string {
    return 'bd-chip';
  }

  constructor(private element: ElementRef) {}

  public ngOnInit() {
    $(this.element.nativeElement).on('click', '.chip .material-icons', (e) => {
      if (this.removeChipOnClick) {
        $(e.currentTarget).parent().parent().remove();
      }
      e.preventDefault();
      return false;
    });
  }
}
