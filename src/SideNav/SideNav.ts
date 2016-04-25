import {Component, Input, Output, ElementRef, OnInit} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import './SideNav.scss';

@Component({
  selector: 'bd-side-nav',
  template: `<div class="bd-side-nav">
            <ng-content></ng-content>
          </div>`,
  directives: [COMMON_DIRECTIVES]
})
export class BdSideNav implements OnInit{
  private toggled : boolean = true;
  @Input() isOpen : boolean = false;
  private __state : any = {
    toggled : true,
  };
  private element : ElementRef;
  constructor(element : ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    this.toggle(this.isOpen);
  }

  public toggle(state?: boolean) : void {
    this.__state.toggled = state || !this.__state.toggled;
    let toggled = this.__state.toggled ? 'toggled' : '';
    this.element.nativeElement.setAttribute('class',toggled);
  }
}

