import {Component} from '@angular/core';
import {ViewContainerRef, AfterViewInit} from '@angular/core';
import {TemplateRef, ElementRef} from '@angular/core';

@Component({
  selector: '[chipItem]',
  inputs: ['chipItem', 'template'],
  template: '<div #container></div>',
})
export class BdChipItem implements AfterViewInit {
  public chipItem: any;
  private template: TemplateRef<any>;

  constructor(private elementRef: ElementRef, private appViewManager: ViewContainerRef) { }

  ngAfterViewInit() {
    // TODO: breaking change after bump to angular rc1

    // setTimeout(() => {
    //   let view = this.appViewManager.createEmbeddedViewInContainer(this.elementRef, 0, this.template);
    //   view.setLocal('$item', this.chipItem);
    // });
  }
}
