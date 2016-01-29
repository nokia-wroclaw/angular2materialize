import {Component} from 'angular2/core';
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

import {BdButtonDocs} from './button';
import {BdListDocs} from './list';
import {BdSelectDocs} from './select';
import {BdCardDocs} from './card';
import {BdIconDocs} from './icon';
import {BdChipDocs} from './chip';
import {BdToastDocs} from './toast';
import {BdTooltipDocs} from './tooltip';
import {BdAccordionDocs} from './accordion';
import {BdFloatingButtonDocs} from './floatingButton';
import {BdDateTimePickerDocs} from './dateTimePicker';
import {BdInputContainerDocs} from './inputContainer';

import './index.html';
import './styles.scss';

@Component({
  selector: 'bd-docs',
  directives: [
    BdButtonDocs,
    BdListDocs,
    BdSelectDocs,
    BdCardDocs,
    BdDateTimePickerDocs,
    BdIconDocs,
    BdFloatingButtonDocs,
    BdChipDocs,
    BdInputContainerDocs,
    BdToastDocs,
    BdTooltipDocs,
    BdAccordionDocs],
  template: `
    <h3 class="header">Button</h3>
    <bd-button-docs></bd-button-docs>
    <h3 class="header">List</h3>
    <bd-list-docs></bd-list-docs>
    <h3 class="header">Select 1½</h3>
    <bd-select-docs></bd-select-docs>
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
    <h3 class="header">Toast notification</h3>
    <bd-toast-docs></bd-toast-docs>
    <h3 class="header">Accordion</h3>
    <bd-accordion-docs></bd-accordion-docs>
    <h3 class="header">Tooltip</h3>
    <bd-tooltip-docs></bd-tooltip-docs>
  `
})
class App {
}

bootstrap(App, [ELEMENT_PROBE_PROVIDERS]);
