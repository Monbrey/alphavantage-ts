"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sectors = /** @class */ (function () {
    function Sectors(api) {
        var _this = this;
        this.performance = function () {
            return _this.api.request("SECTOR");
        };
        this.api = api;
    }
    return Sectors;
}());
exports.default = Sectors;
//# sourceMappingURL=sectors.js.map