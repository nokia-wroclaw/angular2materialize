import {Component, Input} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import * as MaterializeDirectives from 'angular2materialize'
import './layout.scss';

@Component({
  selector: 'bd-layout',
  template: `<ng-content></ng-content>`,
  directives: [ COMMON_DIRECTIVES]
})
export class BdLayout {
  constructor() {
  }
}
