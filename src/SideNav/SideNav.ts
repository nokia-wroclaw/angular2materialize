import {Component, Input, Output, ElementRef, OnInit} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import './SideNav.scss';

@Component({
  selector: 'bd-side-nav',
  styles: [require('./SideNav.scss')],
  template: `<div class="bd-side-nav">
            <ng-content></ng-content>
          </div>`,
  directives: [COMMON_DIRECTIVES]
})
export class BdSideNav implements OnInit{
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

  get toggled(){
    return this.__state.toggled;
  }
}

