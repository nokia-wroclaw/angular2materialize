import {Component} from '@angular/core';
import {BdLayout} from 'angular2materialize';

@Component({
  styles: [`
          bd-layout {
            border: 1px solid darkgrey;
          }
          .box {
            margin: 5px;
            width: 10vw;
            height: 10vw;
            background: #2196F3;
            border: 1px solid darkgrey;
            transition: 1.3s cubic-bezier(0.53, 0.01, 0.1, 0.99) background -0.1s;
          }
          .box:hover {
            background: #26a69a;
          }

          `],
  selector: 'bd-layout-docs',
  template: `<h4>row layout ( layout="row" )</h4>
            <bd-layout layout="row">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </bd-layout>
            <h4>column layout ( layout="column" + layout-align="stretch" )</h4>
            <bd-layout layout-align="stretch" layout="column">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </bd-layout>
            `
})
export class BdLayoutDocs {
  constructor(){

  }
}
