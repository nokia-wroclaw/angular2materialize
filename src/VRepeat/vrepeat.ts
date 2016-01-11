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
  inputs: ['options', 'outerTemplate:template'],
  outputs: ['itemClicked'],
  host: {'(scroll)': 'onScroll($event)'},
  directives: [CORE_DIRECTIVES, BdItem],
  template: `
    <ul 
      class="scroller" 
      [style.height.px]="scrollerHeight - marginTop"
      [style.margin-top.px]="marginTop">
      <li
        *ngFor="#item of visibleOptions; #even=even" 
        [item]="item" 
        [template]="template"
        (click)="onClick(item)"
        [ngClass]="{even: even}">
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

  public template: TemplateRef;
  public outerTemplate:TemplateRef;

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
    if(this.outerTemplate) {
      this.template = this.outerTemplate; 
      this.initItems();   
    } else if(this.itemTemplate) {
      this.template = this.itemTemplate.getTemplate();
      this.initItems();   
    } else {
      throw Error('BdItemTemplate directive inside BdVRepeat or template properties is required');
    }
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
    if(!this.options) {
      return;
    }
    this.scrollerHeight = this.options.length * ITEM_HEIGHT;

    this.firstItem = 0;
    this.lastItem = (CONTAINER_CAPACITY + 5) > this.options.length ? this.options.length - 1 : CONTAINER_CAPACITY + 5;

    this.visibleOptions = this.options.slice(this.firstItem, this.lastItem + 1);
  }
}
