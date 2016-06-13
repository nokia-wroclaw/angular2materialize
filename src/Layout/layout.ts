import {Component, Input} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import * as MaterializeDirectives from 'angular2materialize'

@Component({
  selector: 'bd-layout',
  styles: [require('./layout.scss')],
  template: `<ng-content></ng-content>`,
  directives: [ COMMON_DIRECTIVES]
})
export class BdLayout {
  constructor() {
  }
}
