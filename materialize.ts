/// <reference path="./jquery.d.ts" />
import * as $ from 'jquery';
const g = <any> window;
if(!g.jQuery) {
  g.jQuery = $;
  g.$ = $;
}
import 'materialize-css/dist/js/materialize';
import 'materialize-css/sass/materialize.scss';
