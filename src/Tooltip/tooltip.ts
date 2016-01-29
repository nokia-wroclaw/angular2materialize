import {Directive, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import * as _ from 'lodash';

@Directive({
  selector: BdTooltip.toString(),
  inputs: ['bdTooltip', 'position', 'delay'],
  host: {
    '[attr.data-tooltip]': 'bdTooltip',
    '[attr.data-position]': 'position',
    '[attr.data-delay]': 'delay'
  }
})
export class BdTooltip {

  public bdTooltip: string;
  public position: string = 'top';
  public delay: number = 0;

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('tooltipped');
  }

  public static toString(): string {
    return '[bdTooltip]';
  }

}
