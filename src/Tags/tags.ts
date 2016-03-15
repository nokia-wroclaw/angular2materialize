import {Component, View, ElementRef, OnInit} from 'angular2/core';
import {BdChip, BdInputContainer} from 'angular2materialize';

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_ENTER = 13;
const KEY_BACKSPACE = 8;

@Component({
  selector: 'bd-tags',
  directives: [BdChip, BdInputContainer],
  inputs: ['tags'],
  template: `
  <div>
    <${BdChip} *ngFor="#tag of tags | slice: 0: pointer + 1; #i = index">
      {{tag}}
      <i (click)="onRemove(i,0)" class="material-icons">close</i>
    </${BdChip}>

    <bd-input-container>
      <label for="materialize_tags_input">{{label}}</label>
      <input type="text" id="materialize_tags_input" (keydown)="onKey($event)" (blur)="onBlur()" [(ngModel)]="current">
    </bd-input-container>

    <${BdChip} *ngFor="#tag of tags | slice: pointer+1: tags.length; #i = index">
      {{tag}}
      <i (click)="onRemove(i, pointer)" class="material-icons">close</i>
    </${BdChip}>
  </div>
  `
})
export class BdTags implements OnInit {
  private tags:string[];
  private label:string;
  private current:string = '';
  private pointer:number;
  private elementRef:ElementRef;

  constructor(elementRef:ElementRef) {
    this.elementRef = elementRef;
  }

  public ngOnInit() {
    this.pointer = this.tags.length - 1
  }

  private onKey(event:any) {
    switch (event.keyCode) {
      case KEY_ENTER:
        this.addTag(this.current);
        break;
      case KEY_LEFT:
        this.changePointer(this.pointer - 1);
        break;
      case KEY_RIGHT:
        this.changePointer(this.pointer + 1);
        break;
      case KEY_BACKSPACE:
        if(this.current.length > 0) {
          return;
        }
        this.removeTag();
        break;
    }
  }

  private onBlur(): void {
    this.addTag(this.current);
  }

  private onRemove(index: number, pointer: number): void {
    const tagIndex = index + pointer;
    this.tags = this.removeFromArrayBeforeIndex(this.tags, tagIndex);
  }

  private addTag(tag:string): void {
    if (!tag || this.tags.indexOf(tag) >= 0) {
      this.current = '';
      return;
    }

    this.tags = this.addToArrayAfterIndex(this.tags, this.pointer, tag.trim());
    this.current = '';
    this.changePointer(this.pointer + 1);
  }

  private removeTag(): void {
    if(this.pointer < 0) {
      return;
    }

    this.tags = this.removeFromArrayBeforeIndex(this.tags, this.pointer);
    this.changePointer(this.pointer - 1);
  }

  private removeFromArrayBeforeIndex(array: string[], index: number): string[] {
    const firstPart = array.slice(0, index);
    const secondPart = array.slice(index + 1, array.length);
    return [...firstPart, ...secondPart];
  }

  private changePointer(newValue): void {
    if (this.current) {
      return;
    }
    this.pointer = this.resolveToBoundryIndex(newValue);
  }

  private addToArrayAfterIndex(array: string[], index: number, item: string): string[] {
    const firstPart = array.slice(0, index+1);
    const secondPart = array.slice(index+1, array.length);
    return [...firstPart, item, ...secondPart];
  }

  private resolveToBoundryIndex(index:number): number {
    return Math.min(
      this.tags.length - 1,
      Math.max(-1, index)
    );
  }
}