import {Component, EventEmitter, ContentChild} from 'angular2/core';
import {AfterContentInit, OnChanges} from 'angular2/core';
import {TemplateRef, SimpleChange} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';


import {BdItem} from './item';
import {BdItemTemplate} from './item-template';
export {BdItemTemplate};

import './vrepeat.scss';

const CONTAINER_HEIGHT = 300;
const ITEM_HEIGHT = 50;
const CONTAINER_CAPACITY = CONTAINER_HEIGHT / ITEM_HEIGHT;

@Component({
  selector: 'bd-v-repeat',
  inputs: ['options'],
  outputs: ['itemClicked'],
  host: {'(scroll)': 'onScroll($event)'},
  directives: [CORE_DIRECTIVES, BdItem],
  template: `
    <ul 
      class="scroller" 
      [style.height.px]="scrollerHeight - marginTop"
      [style.margin-top.px]="marginTop">
      <li
        *ngFor="#item of visibleOptions" 
        [item]="item" 
        [template]="template"
        (click)="onClick(item)">
      </li>
      <ng-content></ng-content>
    </ul>
  `
})
export class BdVRepeat implements AfterContentInit, OnChanges {
  @ContentChild(BdItemTemplate) itemTemplate: BdItemTemplate;
  public itemClicked: EventEmitter<any>;
  public scrollerHeight: number;
  public marginTop: number;

  private firstItem: number;
  private lastItem: number;
  private options: Array<any>;
  public visibleOptions: Array<any>;

  private template: TemplateRef;

  constructor() {
    this.itemClicked = new EventEmitter();
    this.firstItem = 0;
    this.lastItem = 0;
    this.marginTop = 0;
    this.scrollerHeight = CONTAINER_HEIGHT;
  }

  onScroll(event: any) {
    let scrollTop = event.target.scrollTop;

    let shouldHave = Math.ceil((scrollTop + CONTAINER_HEIGHT) / ITEM_HEIGHT + 5);
    this.lastItem = shouldHave >= this.options.length ? this.options.length - 1 : shouldHave;
    let shouldBeFirst = this.lastItem - (CONTAINER_CAPACITY + 10);
    this.firstItem = shouldBeFirst <= 0 ? 0 : shouldBeFirst;

    this.marginTop = this.firstItem * ITEM_HEIGHT;
    this.visibleOptions = this.options.slice(this.firstItem, this.lastItem + 1);
  }

  ngAfterContentInit() {
    this.template = this.itemTemplate.getTemplate();
    this.initItems();  
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if(changes['options'].currentValue) {
      this.initItems();
    }
  }

  onClick(item) {
    this.itemClicked.emit(item);
  }

  private initItems() {
    if(!this.options || !this.itemTemplate) {
      return;
    }
    this.scrollerHeight = this.options.length * ITEM_HEIGHT;

    this.firstItem = 0;
    this.lastItem = (CONTAINER_CAPACITY + 5) > this.options.length ? this.options.length - 1 : CONTAINER_CAPACITY + 5;

    this.visibleOptions = this.options.slice(this.firstItem, this.lastItem + 1);
  }
}
