import {Component} from 'angular2/core';
import {AppViewManager, AfterViewInit} from 'angular2/core';
import {TemplateRef, ElementRef} from 'angular2/core';

@Component({
  selector: '[chipItem]',
  inputs: ['chipItem', 'template'],
  template: '<div #container></div>',
})
export class BdChipItem implements AfterViewInit {
  public chipItem: any;
  private template: TemplateRef;

  constructor(private elementRef: ElementRef, private appViewManager: AppViewManager) { }

  ngAfterViewInit() {
    setTimeout(() => {
      let view = this.appViewManager.createEmbeddedViewInContainer(this.elementRef, 0, this.template);
      view.setLocal('$item', this.chipItem);
    });
  }
}
