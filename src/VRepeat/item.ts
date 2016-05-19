import {Component} from '@angular/core';
import {ViewChild, ViewContainerRef} from '@angular/core';
import {AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {TemplateRef, ElementRef} from '@angular/core';

@Component({
  selector: 'bd-v-repeat #scroller>li',
  inputs: ['item', 'template'],
  template: '<div #container></div>',
})
export class BdItem implements AfterViewInit {
  public item: any;
  @ViewChild('container') container: ElementRef;
  private template: TemplateRef<any>;

  constructor(private appViewManager: ViewContainerRef, private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // TODO: breaking change after bump to angular rc1

    // let view = this.appViewManager.createEmbeddedView(this.template, this.container, 0);
    // view.setLocal('$item', this.item);
    // this.changeDetector.detectChanges();
  }
}
