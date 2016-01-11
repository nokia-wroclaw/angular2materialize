import {Component} from 'angular2/core';
import {AppViewManager, ViewChild} from 'angular2/core';
import {AfterViewInit, ChangeDetectorRef} from 'angular2/core';
import {TemplateRef, ElementRef} from 'angular2/core';

@Component({
  selector: 'bd-v-repeat #scroller>li',
  inputs: ['item', 'template'],
  template: '<div #container></div>',
})
export class BdItem implements AfterViewInit {
  public item: any;
  @ViewChild('container') container: ElementRef;
  private template: TemplateRef;

  constructor(private appViewManager: AppViewManager, private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {
    let view = this.appViewManager.createEmbeddedViewInContainer(this.container, 0, this.template);
    view.setLocal('$item', this.item);
    this.changeDetector.detectChanges();
  }
}
