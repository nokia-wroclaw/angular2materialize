import {Directive, ElementRef} from 'angular2/core';
import * as $ from 'jquery';

@Directive({
  selector: BdBox.toString(),
  inputs: ['bdBox'],
  host: {
    '[attr.data-caption]': 'bdBox',
    '[class.materialboxed]': '\'true\''
  }
})
export class BdBox {

  constructor(elementRef: ElementRef) {
    $(elementRef.nativeElement).materialbox();
  }

  public static toString(): string {
    return '[bdBox]';
  }
}
