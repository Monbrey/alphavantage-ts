"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Crypto = /** @class */ (function () {
    function Crypto(api) {
        var _this = this;
        this.series = function (fn) { return function (symbol, market) {
            return _this.api.request(fn)({ symbol: symbol, market: market });
        }; };
        this.intraday = this.series("DIGITAL_CURRENCY_INTRADAY");
        this.daily = this.series("DIGITAL_CURRENCY_DAILY");
        this.weekly = this.series("DIGITAL_CURRENCY_WEEKLY");
        this.monthly = this.series("DIGITAL_CURRENCY_MONTHLY");
        this.api = api;
    }
    return Crypto;
}());
exports.default = Crypto;
//# sourceMappingURL=crypto.js.map