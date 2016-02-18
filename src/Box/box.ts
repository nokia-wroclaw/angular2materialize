import {Directive, OnInit, ElementRef} from 'angular2/core';
import * as $ from 'jquery';

@Directive({
  selector: BdBox.toString(),
  inputs: ['bdBox'],
  host: {
    '[attr.data-caption]': 'bdBox',
    '[class.materialboxed]': '\'true\''
  }
})
export class BdBox implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    $(this.elementRef.nativeElement).materialbox();
  }

  public static toString(): string {
    return '[bdBox]';
  }
}
