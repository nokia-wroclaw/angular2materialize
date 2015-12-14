import 'es6-shim';
import 'reflect-metadata';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';

import ButtonDocs from './button';
import ListDocs from './list';

import './index.html';

@Component({
  selector: 'bd-docs',
  directives: [ButtonDocs, ListDocs],
  template: `
    <bd-button-docs></bd-button-docs>
    <bd-list-docs></bd-list-docs>
  `
})
class App {
}

bootstrap(App, [

]);
