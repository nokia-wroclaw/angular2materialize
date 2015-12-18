var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var button_1 = require('./button');
var list_1 = require('./list');
var select2_1 = require('./select2');
var card_1 = require('./card');
var icon_1 = require('./icon');
var chip_1 = require('./chip');
var floatingButton_1 = require('./floatingButton');
require('./index.html');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'bd-docs',
            directives: [button_1["default"], list_1["default"], select2_1["default"], card_1["default"], icon_1["default"], floatingButton_1["default"], chip_1["default"]],
            template: "\n    <bd-button-docs></bd-button-docs>\n    <bd-list-docs></bd-list-docs>\n    <bd-select2-docs></bd-select2-docs>\n    <bd-card-docs></bd-card-docs>\n    <bd-icon-docs></bd-icon-docs>\n    <bd-chip-docs></bd-chip-docs>\n    <bd-floating-button-docs></bd-floating-button-docs>\n  "
        })
    ], App);
    return App;
})();
browser_1.bootstrap(App, [browser_1.ELEMENT_PROBE_PROVIDERS]);
