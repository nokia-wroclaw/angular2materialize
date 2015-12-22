import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[focusOnShow]'
})
export default class FocusOnShow {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.invokeElementMethod(el, 'focus', []);
  }
}
