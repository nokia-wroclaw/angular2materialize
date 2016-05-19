import {Directive, ElementRef} from '@angular/core';
import {OnChanges, OnDestroy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import * as _ from 'lodash';
import * as $ from 'jquery';

@Directive({
  selector: BdTooltip.toString(),
  inputs: ['bdTooltip', 'position', 'delay'],
  host: {
    '[attr.data-tooltip]': 'bdTooltip',
    '[attr.data-position]': 'position',
    '[attr.data-delay]': 'delay',
    '[class.tooltipped]': '\'true\''
  }
})
export class BdTooltip implements OnChanges, OnChanges {
  public bdTooltip: string;
  public position: string = 'top';
  public delay: number = 0;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    $(this.element.nativeElement).tooltip({});
  }

  ngOnDestroy() {
    $(this.element.nativeElement).tooltip('remove');
  }

  public static toString(): string {
    return '[bdTooltip]';
  }
}
