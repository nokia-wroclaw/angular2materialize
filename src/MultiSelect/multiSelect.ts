import {Component, EventEmitter, TemplateRef, ContentChild, ViewChild} from '@angular/core';
import {OnChanges, SimpleChange, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import * as _ from 'lodash';

import {BdSelect} from '../Select/select';
import {BdIcon} from '../Icon/icon';
import {BdChipItem} from './chipItem';
import {BdChip} from '../Chip/chip';
import {BdMultiSelectOptionTemplate} from './multiSelectOptionTemplate';
import {BdMultiSelectChipTemplate} from './multiSelectChipTemplate';

@Component({
  selector: 'bd-multi-select',
  inputs: ['value', 'options', 'itemKey', 'placeholder', 'selected'],
  outputs: ['selectedChange'],
  directives: [CORE_DIRECTIVES, BdSelect, BdChip, BdChipItem, BdIcon, BdMultiSelectOptionTemplate],
  styles: [require('./multiSelect.scss')],
  template: `
    <div class="multiple-select-container hover-card">
      <fieldset>
        <div class="chips-container " (click)="toggleSelect($event)">
          <label *ngIf="!selected.length" class="multiple-placeholder">{{placeholder}}</label>
          <bd-chip *ngFor="#item of selected"><div [template]="chipTemplate" [chipItem]="item" ></div><bd-icon (click)="optionSelectionChanged(item)">close</bd-icon></bd-chip>
          <span [ngClass]="{'disabled': !options.length}" class="multiple-caret">▼</span>
        </div>
        <bd-select
          (blur)="onSelectFocusLost()"
          [placeholder]="placeholder"
          [options]="options"
          (valueChange)="optionSelectionChanged($event)"
          [itemText]="itemText">
          <ng-content></ng-content>
        </bd-select>
      </fieldset>
    </div>
  `
})
export class BdMultiSelect implements OnChanges, AfterViewInit {

  public selectedChange: EventEmitter<any>;
  public selected: Array<any>;
  public options: Array<any>;
  public itemKey: string;
  public itemText: string;
  public placeholder: string;
  public template: TemplateRef<any>;
  public chipTemplate: TemplateRef<any>;
  private initialOptions: Array<any>;

  @ContentChild(BdMultiSelectOptionTemplate) private bdMultiSelectOptionTemplate: BdMultiSelectOptionTemplate;
  @ContentChild(BdMultiSelectChipTemplate) private bdMultiSelectChipTemplate: BdMultiSelectChipTemplate;
  @ViewChild(BdSelect) private bdSelect: BdSelect;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.options = [];
    this.selected = [];
    this.selectedChange = new EventEmitter<any>();
  }

  public ngAfterViewInit() {

    if (this.bdMultiSelectOptionTemplate) {
      this.bdSelect.optionTemplate = this.bdMultiSelectOptionTemplate.getTemplate();
    }
    if (this.bdMultiSelectChipTemplate) {
      this.chipTemplate = this.bdMultiSelectChipTemplate.getTemplate();
    }
    this.closeSelect();
    this.changeDetector.detectChanges();
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes['options'] && changes['options'].currentValue) {
      this.initialOptions = _.uniqWith(this.options, _.isEqual);
    }
    if (changes['selected'] && changes['selected'].currentValue) {
      this.options = _.differenceWith(this.initialOptions, this.selected, _.isEqual);
    }
    if (changes['itemKey'] && changes['itemKey'].currentValue) {
      this.itemText = `$item.${this.itemKey}`;
    }
  }

  public optionSelectionChanged(option: any) {
    this.bdSelect.selectedOptionText = '';
    this.selected  = _.xorWith(this.selected, [option], _.isEqual);
    this.selectedChange.emit(this.selected);
    this.closeSelect();
  }

  public onSelectFocusLost() {
    setTimeout(() => {
      this.bdSelect.isVisible = this.bdSelect.isPopupOpen = false;
    }, 100);
  }

  public toggleSelect(event: Event) {
    if (!this.bdSelect.isVisible && _.isEmpty(this.options)) {
      return;
    }
    this.bdSelect.isVisible = !this.bdSelect.isVisible;
    this.bdSelect.isPopupOpen = this.bdSelect.isVisible;
    event.stopPropagation();
  }

  private closeSelect() {
    this.bdSelect.isVisible = this.bdSelect.isPopupOpen = false;
  }

}
