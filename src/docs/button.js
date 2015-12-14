var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var index_ts_1 = require('../index.ts');
var ButtonDocs = (function () {
    function ButtonDocs() {
    }
    ButtonDocs = __decorate([
        core_1.Component({
            selector: 'bd-button-docs',
            directives: [index_ts_1["default"]],
            template: "\n    <div>\n      <bd-button\n        isLarge=\"true\"\n        >\n        Click me!\n      </bd-button>\n    </div>\n  "
        })
    ], ButtonDocs);
    return ButtonDocs;
})();
exports["default"] = ButtonDocs;
