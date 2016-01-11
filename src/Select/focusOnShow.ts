import {Directive, ElementRef, Renderer, AfterViewInit} from 'angular2/core';

@Directive({
  selector: '[focusOnShow]'
})
export default class FocusOnShow implements AfterViewInit {

  constructor(private element: ElementRef, private renderer: Renderer) {}

  ngAfterViewInit() {
    // this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
    this.element.nativeElement.focus();
  }

}
