import {Component, EventEmitter, ContentChild} from '@angular/core';
import {AfterContentInit, OnChanges} from '@angular/core';
import {TemplateRef, SimpleChange} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';


import {BdItem} from './item';
import {BdItemTemplate} from './item-template';
export {BdItemTemplate};

const CONTAINER_HEIGHT = 300;
const ITEM_HEIGHT = 50;
const CONTAINER_CAPACITY = CONTAINER_HEIGHT / ITEM_HEIGHT;

@Component({
  selector: 'bd-v-repeat',
  inputs: ['items', 'outerTemplate:template', 'selectedItem', 'scrollToSelection'],
  outputs: ['itemClicked'],
  directives: [CORE_DIRECTIVES, BdItem],
  styles: [require('./vrepeat.scss')],
  template: `
    <div
      #container
      class="container"
      (scroll)="onScroll(container.scrollTop)"
      [scrollTop]="scrollTop">
      <ul
        class="scroller"
        [style.height.px]="scrollerHeight - marginTop"
        [style.margin-top.px]="marginTop">
        <li
          *ngFor="#item of visibleItems; #even=even"
          (click)="onClick(item)"
          [item]="item"
          [template]="template"
          [ngClass]="{even: even, selected: item === selectedItem}">
        </li>
        <ng-content></ng-content>
      </ul>
    <div>
  `
})
export class BdVRepeat implements AfterContentInit, OnChanges {
  @ContentChild(BdItemTemplate) itemTemplate: BdItemTemplate;
  public itemClicked: EventEmitter<any>;

  public scrollerHeight: number;
  public marginTop: number;
  public scrollTop: number;

  public scrollToSelection: boolean;

  public items: Array<any>;
  public visibleItems: Array<any>;
  public selectedItem: any;

  public template: TemplateRef<any>;
  public outerTemplate: TemplateRef<any>;

  private firstItem: number;
  private lastItem: number;

  constructor() {
    this.firstItem = 0;
    this.lastItem = 0;
    this.marginTop = 0;
    this.scrollTop = 0;
    this.scrollerHeight = CONTAINER_HEIGHT;
    this.itemClicked = new EventEmitter<any>(false);
  }

  onClick(item) {
    this.itemClicked.emit(item);
  }

  onScroll(scrollTop: number) {
    this.scrollTop = scrollTop;

    let shouldHave = Math.ceil((this.scrollTop + CONTAINER_HEIGHT) / ITEM_HEIGHT + 5);
    this.lastItem = shouldHave >= this.items.length ? this.items.length - 1 : shouldHave;
    let shouldBeFirst = this.lastItem - (CONTAINER_CAPACITY + 10);

    this.selectVisibleItems(shouldBeFirst, shouldHave);
  }

  ngAfterContentInit() {
    if (this.outerTemplate) {
      this.template = this.outerTemplate;
      this.initItems();
    } else if (this.itemTemplate) {
      this.template = this.itemTemplate.getTemplate();
      this.initItems();
    } else {
      throw Error('BdItemTemplate directive inside BdVRepeat or template properties is required');
    }
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes['items'] && changes['items'].currentValue) {
      this.initItems();
    }

    if (this.scrollToSelection && changes['selectedItem'] && changes['selectedItem'].currentValue) {
      this.scrollToSelectedItem();
    }
  }

  private scrollToSelectedItem() {
    let itemIndex = this.items.indexOf(this.selectedItem);
    let firstVisibleItem = Math.floor(this.scrollTop / ITEM_HEIGHT);
    let lastVisibleItem = firstVisibleItem + CONTAINER_CAPACITY;

    let isItemVisible = itemIndex >= firstVisibleItem && itemIndex < lastVisibleItem;

    if (isItemVisible) {
      return;
    }

    let haveToScrollBy = 0;
    if (itemIndex < firstVisibleItem) {
      haveToScrollBy = itemIndex - firstVisibleItem;
    } else {
      haveToScrollBy = itemIndex - lastVisibleItem + 1;
    }

    this.scrollTop = this.scrollTop + haveToScrollBy * ITEM_HEIGHT;
  }

  private selectVisibleItems(start: number, end: number) {
    this.lastItem = end >= this.items.length ? this.items.length - 1 : end;
    this.firstItem = start <= 0 ? 0 : start;

    this.marginTop = this.firstItem * ITEM_HEIGHT;
    this.visibleItems = this.items.slice(this.firstItem, this.lastItem + 1);
  }


  private initItems() {
    if (!this.items) {
      return;
    }
    this.scrollerHeight = this.items.length * ITEM_HEIGHT;

    this.firstItem = 0;
    this.lastItem = (CONTAINER_CAPACITY + 5) > this.items.length ? this.items.length - 1 : CONTAINER_CAPACITY + 5;

    this.visibleItems = this.items.slice(this.firstItem, this.lastItem + 1);
  }
}
