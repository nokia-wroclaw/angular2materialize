import {Component} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

import ButtonDocs from './button';
import ListDocs from './list';
import SelectDocs from './select2';
import CardDocs from './card';
import Icon from './icon';
import FloatingButton from './floatingButton';


import './index.html';

@Component({
  selector: 'bd-docs',
  directives: [ButtonDocs, ListDocs, SelectDocs, CardDocs, Icon, FloatingButton],
  template: `
    <bd-button-docs></bd-button-docs>
    <bd-list-docs></bd-list-docs>
    <bd-select2-docs></bd-select2-docs>
    <bd-card-docs></bd-card-docs>
    <bd-icon-docs></bd-icon-docs>
    <bd-floating-button-docs></bd-floating-button-docs>
  `
})
class App {
}

bootstrap(App, [ELEMENT_PROBE_PROVIDERS]);
