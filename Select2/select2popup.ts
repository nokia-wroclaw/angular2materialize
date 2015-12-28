import {Component, EventEmitter, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import FocusOnShow from './focusOnShow';
import * as _ from 'lodash';
import Dictionary = _.Dictionary;


@Component({
  selector: BdSelect2Popup.toString(),
  directives: [CORE_DIRECTIVES, FocusOnShow],
  template: `
    <div
        *ngIf="isOpen"
        class="select2__popup"
        >
        <input
          type="text"
          placeholder="Type to search"
          [(ngModel)]="searchPhrase"
          (keydown)="keydown($event)"
          class="select2__popup__input"
          focusOnShow
          (blur)="isOpen=false"

        />
        <executeOnShow (callback)="test123()"></executeOnShow>
        <ul class="select2__popup__ul dropdown-content">
          <li *ngFor="#key of visibleOptionsKeys"
           [class.selected]="key===selectedKey"
           (mousedown)="$event.preventDefault()"
           (click)="selectOption(key)"
           >
            <a href="#" (mousedown)="$event.preventDefault()">{{options[key]}}</a>
           </li>
        </ul>
      </div>
  `,
  inputs: ['options', 'value', 'isOpen'],
  outputs: ['valueChange', 'isOpenChange']
})
export default class BdSelect2Popup {

  __isOpen: boolean;
  value: string;
  valueChange: EventEmitter<string> = new EventEmitter<string>();
  isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  visibleOptionsKeys: string[];
  size: number;

  private nativeElement: HTMLElement;

  constructor(elRef: ElementRef, renderer: Renderer) {
    this.nativeElement = elRef.nativeElement;
  }

  static toString(): string {
    return 'select2popup';
  }

  keydown(event: KeyboardEvent) {
    if (event.which === 13) { //enter
      if (this.selectedKey !== undefined) {
        this.selectOption(this.selectedKey);
      }
    }
    if (event.which === 27) { //escape
      this.isOpen = false;
    }
    if (event.which === 38) { //arrow up
      this.selectedKey = this.changeSelectedKeyPositionBy(-1);
      this.scrollToSelectedOption();
      event.preventDefault();
    }
    if (event.which === 40) { //arrow down
      this.selectedKey = this.changeSelectedKeyPositionBy(1);
      this.scrollToSelectedOption(false);
      event.preventDefault();
    }
  }

  private scrollToSelectedOption(toTop = true) {
    const indexOfSelectedOption = this.visibleOptionsKeys.indexOf(this.selectedKey);
    const selectedOption = this.nativeElement.querySelectorAll(`ul li`)[indexOfSelectedOption];
    const selectedOptionRect = selectedOption.getBoundingClientRect();
    const ul = this.nativeElement.querySelector('ul');
    const ulRect = ul.getBoundingClientRect();

    const top = selectedOptionRect.top - ulRect.top;
    const bottom = selectedOptionRect.bottom - ulRect.top;
    if (top < 0 || bottom > ulRect.height) {
      if (toTop) {
        ul.scrollTop = ul.scrollTop + top;
      } else {
        ul.scrollTop = ul.scrollTop + (bottom - ulRect.height);
      }
    }
  };

  selectOption(key: string) {
    this.value = key;
    this.valueChange.emit(this.value);
    this.isOpen = false;
  }

  test123() {
    console.log("TEST EXECUTED!");
    const ul = this.nativeElement.querySelector('ul');
    console.log(ul);
  }


  /**
   * isOpen
   */

  get isOpen(): boolean {
    return this.__isOpen;
  }

  set isOpen(value: boolean) {
    if (value === true) {
      this.searchPhrase = '';
    }
    this.__isOpen = value;
    this.isOpenChange.emit(value);
    if (this.isOpen) {
      setTimeout(() => {
        this.scrollToSelectedOption();
      }, 0);
    }
  }

  /**
   * searchPhrase
   */

  private __searchPhrase: string;

  set searchPhrase(value: string) {
    this.__searchPhrase = value;
    this.visibleOptionsKeys = this.getVisibleOptionsKeys(this.__searchPhrase);
    this.selectedKey = this.getSelectedKey();
  }

  get searchPhrase() {
    return this.__searchPhrase;
  }

  /**
   * selectedKey
   */

  private __selectedKey: string;

  set selectedKey(value: string) {
    this.__selectedKey = value;
  }

  get selectedKey(): string {
    return this.__selectedKey;
  }

  /**
   * options
   */

  private __options: Dictionary<string>;

  set options(value: Dictionary<string>) {
    this.__options = value;
  }

  get options(): Dictionary<string> {
    return this.__options;
  }

  private getVisibleOptionsKeys(filter: string): string[] {
    const filterExpr = new RegExp(filter, 'i');
    return _.chain<Dictionary<string>>(this.options)
      .pick<Dictionary<string>>((label: string) => label.search(filterExpr) !== -1)
      .keys().value();
  }

  private changeSelectedKeyPositionBy(positionChange: number): string {
    let nextPosition = this.visibleOptionsKeys.indexOf(this.selectedKey) + positionChange;
    if (nextPosition < 0) {
      nextPosition = this.visibleOptionsKeys.length - 1;
    }
    if (nextPosition >= this.visibleOptionsKeys.length) {
      nextPosition = 0;
    }
    return this.visibleOptionsKeys[nextPosition];
  }

  private getSelectedKey(): string {
    if (_.any(this.visibleOptionsKeys, (key) => key === this.value)) {
      return this.value;
    }
    return this.visibleOptionsKeys[0];
  }
}
