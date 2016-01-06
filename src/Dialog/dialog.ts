import {Component, EventEmitter, ElementRef, OnChanges, OnInit, SimpleChange} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import * as $ from 'jquery';

@Component({
  selector: BdDialog.toString(),
  directives: [CORE_DIRECTIVES],
  template: `
    <div id="bdDialog" [ngClass]="classes" class="modal">
      <div class="modal-content">
        <ng-content select=".content"></ng-content>
      </div>
      <div *ngIf="withFooter" class="modal-footer">
        <ng-content select=".footer"></ng-content>
      </div>
    </div>
  `,
  inputs: ['isOpen', 'bottom', 'fixedFooter', 'dismissible', 'opacity', 'inDuration', 'outDuration', 'withFooter'],
  outputs: ['isOpenChange']
})
export default class BdDialog implements OnChanges, OnInit {
  public classes: any;
  public bottom: boolean;
  public isOpen: boolean;
  public opacity: number;
  public inDuration: number;
  public outDuration: number;
  public withFooter: boolean;
  public dismissible: boolean;
  public fixedFooter: boolean;
  public isOpenChange: EventEmitter<boolean>;

  private element: Element;

  constructor(elementRef: ElementRef) {
    this.bottom = false;
    this.isOpen = false;
    this.withFooter = false;
    this.fixedFooter = false;

    this.element = elementRef.nativeElement;
    this.isOpenChange = new EventEmitter();
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    for(let change in changes) {
      if(change === 'bottom' || change === 'fixedFooter') {
        this.classes =  {
          'bottom-sheet': this.bottom,
          'modal-fixed-footer': this.fixedFooter
        };
      }
    }

    if('isOpen' in changes) {
      if(this.isOpen) {
        $(this.element.querySelector('#bdDialog')).openModal(this.getOptions());
      } else if(changes['isOpen'].previousValue === true) {
        $(this.element.querySelector('#bdDialog')).closeModal();
      }
    }
  }

  ngOnInit() {
    this.classes = {
      'bottom-sheet': this.bottom,
      'modal-fixed-footer': this.fixedFooter
    };
  }

  public static toString(): string {
    return 'bd-dialog';
  }

  private getOptions() {
    return {
      opacity: this.opacity,
      in_duration: this.inDuration,
      out_duration: this.outDuration,
      dismissible: this.dismissible,
      complete: () => this.onDialogClose()
    };
  }

  private onDialogClose() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
}