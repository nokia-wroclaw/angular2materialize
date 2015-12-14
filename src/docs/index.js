var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var bootstrap_1 = require('angular2/bootstrap');
var button_1 = require('./button');
require('es6-shim');
require('./index.html');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'bd-docs',
            directives: [button_1["default"]],
            template: "\n    <bd-button-docs></bd-button-docs>\n  "
        })
    ], App);
    return App;
})();
bootstrap_1.bootstrap(App, []);
