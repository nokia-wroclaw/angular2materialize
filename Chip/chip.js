var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var BdChip = (function () {
    function BdChip() {
    }
    BdChip.toString = function () {
        return 'bd-chip';
    };
    BdChip = __decorate([
        core_1.Component({
            selector: BdChip.toString(),
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n    <div class=\"chip\">\n      <ng-content></ng-content>\n    </div>\n  "
        })
    ], BdChip);
    return BdChip;
})();
exports["default"] = BdChip;
