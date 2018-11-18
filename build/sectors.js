"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forex = /** @class */ (function () {
    function Forex(api) {
        this.performance = this.api.request("SECTOR");
        this.api = api;
    }
    return Forex;
}());
exports.default = Forex;
//# sourceMappingURL=sectors.js.map