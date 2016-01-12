/// <reference path="./jquery.d.ts" />

import * as $ from 'jquery';
const g = <any>window;
if (!g.jQuery) {
  g.jQuery = $;
  g.$ = $;
}
import * as Hammer from 'hammerjs';
if (!g.Hammer) {
  g.Hammer = Hammer;
}
import 'materialize-css/dist/js/materialize';
import 'materialize-css/bin/materialize.css';
