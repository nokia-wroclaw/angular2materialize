import {Component} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

import BdButtonDocs from './button';
import BdListDocs from './list';
import BdSelectDocs from './select2';
import BdCardDocs from './card';
import BdIcon from './icon';
import BdChip from './chip';
import BdFloatingButton from './floatingButton';
import BdDatePickerDocs from './datepicker';
import BdInputContainerDocs from './inputContainer';

import './index.html';

@Component({
  selector: 'bd-docs',
  directives: [BdButtonDocs, BdListDocs, BdSelectDocs, BdCardDocs, BdDatePickerDocs, BdIcon, BdFloatingButton, BdChip, BdInputContainerDocs],
  template: `
    <bd-button-docs></bd-button-docs>
    <bd-list-docs></bd-list-docs>
    <bd-select2-docs></bd-select2-docs>
    <bd-card-docs></bd-card-docs>
    <bd-icon-docs></bd-icon-docs>
    <bd-chip-docs></bd-chip-docs>
    <bd-floating-button-docs></bd-floating-button-docs>
    <bd-date-picker-docs></bd-date-picker-docs>
    <bd-input-container-docs></bd-input-container-docs>
  `
})
class App {
}

bootstrap(App, [ELEMENT_PROBE_PROVIDERS]);
