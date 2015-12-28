/// <reference path="./../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

import BdButtonDocs from './button';
import BdListDocs from './list';
import BdSelectDocs from './select2';
import BdCardDocs from './card';
import BdIcon from './icon';
import BdChip from './chip';
import BdFloatingButton from './floatingButton';
import BdDateTimePickerDocs from './dateTimePicker';
import BdInputContainerDocs from './inputContainer';

import './index.html';
import './styles.scss';

@Component({
  selector: 'bd-docs',
  directives: [BdButtonDocs, BdListDocs, BdSelectDocs, BdCardDocs, BdDateTimePickerDocs, BdIcon, BdFloatingButton, BdChip, BdInputContainerDocs],
  template: `
    <h3 class="header">Button</h3>
    <bd-button-docs></bd-button-docs>
    <h3 class="header">List</h3>
    <bd-list-docs></bd-list-docs>
    <h3 class="header">Select 1½</h3>
    <bd-select2-docs></bd-select2-docs>
    <h3 class="header">Card</h3>
    <bd-card-docs></bd-card-docs>
    <h3 class="header">Icon</h3>
    <bd-icon-docs></bd-icon-docs>
    <h3 class="header">Chip</h3>
    <bd-chip-docs></bd-chip-docs>
    <h3 class="header">Floating button</h3>
    <bd-floating-button-docs></bd-floating-button-docs>
    <h3 class="header">Date time</h3>
    <bd-date-time-picker-docs></bd-date-time-picker-docs>
    <h3 class="header">Input container</h3>
    <bd-input-container-docs></bd-input-container-docs>
  `
})
class App {
}

bootstrap(App, [ELEMENT_PROBE_PROVIDERS]);
