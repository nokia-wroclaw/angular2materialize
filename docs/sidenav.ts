import {Component} from 'angular2/core';
import {BdSideNav, BdLayout, BdButton} from 'angular2materialize';
import {COMMON_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'bd-side-nav-docs',
  styles: [`
    .sitenav-cnt {
      height: 400px;
      width: 300px;
    }
    .cnt {
      height: 420px;
    }
  `],
  template: `<bd-layout  layout="row">
                <div class="cnt">
                   <bd-button (click)="sidenav.toggle()">Toggle nav</bd-button>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <bd-side-nav #sidenav [isOpen]="true" sidenav-right >
                  <bd-layout layout="row" class="sitenav-cnt">
                    <p>side nav content</p>
                  </bd-layout>
                </bd-side-nav>
                </bd-layout>`,
  directives: [BdLayout, BdSideNav, BdButton, COMMON_DIRECTIVES]
})
export class BdSideNavDocs {
  constructor(){
  }
}
