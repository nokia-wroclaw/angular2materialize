import {Component} from '@angular/core';
import {BdToast, BdButton} from 'angular2materialize';

@Component({
  selector: 'bd-toast-docs',
  directives: [BdButton],
  template: `
    <md-input-container><input [ngModel]="message"/></md-input-container>
    <bd-button (click)="openToast()">show toast</bd-button>
  `
})
export class BdToastDocs {
  public message: string = 'toast message';
  public openToast() {
    BdToast.open(this.message);
  }
}
