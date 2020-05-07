"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forex = /** @class */ (function () {
    function Forex(api) {
        var _this = this;
        this.rate = function (from_currency, to_currency) {
            return _this.api.request("CURRENCY_EXCHANGE_RATE")({
                from_currency: from_currency,
                to_currency: to_currency
            });
        };
        this.api = api;
    }
    return Forex;
}());
exports.default = Forex;
//# sourceMappingURL=forex.js.map