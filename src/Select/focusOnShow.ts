import {Directive, ElementRef, AfterViewInit} from 'angular2/core';

@Directive({
  selector: '[focusOnShow]'
})
export class FocusOnShow implements AfterViewInit {

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
}
