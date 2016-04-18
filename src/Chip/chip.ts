import {Component, OnInit, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import * as $ from 'jquery';

@Component({
  selector: BdChip.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div class="chip">
      <ng-content></ng-content>
    </div>
  `,

})
export class BdChip implements OnInit {

  public static toString(): string {
    return 'bd-chip';
  }

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    $(this.element.nativeElement).on('click', '.chip .material-icons', (e) => {
      e.preventDefault();
      $(e.currentTarget).parent().parent().remove();
      return false;
    });
  }
}
