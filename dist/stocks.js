"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stocks = /** @class */ (function () {
    function Stocks(api) {
        var _this = this;
        this.intraday = function (symbol, _a) {
            var interval = _a.interval, _b = _a.outputsize, outputsize = _b === void 0 ? "compact" : _b, _c = _a.datatype, datatype = _c === void 0 ? "json" : _c;
            return _this.api.request("TIME_SERIES_INTRADAY")({
                symbol: symbol,
                interval: interval,
                outputsize: outputsize,
                datatype: datatype
            });
        };
        this.dailySeries = function (fn) { return function (symbol, _a) {
            var _b = _a.outputsize, outputsize = _b === void 0 ? "compact" : _b, _c = _a.datatype, datatype = _c === void 0 ? "json" : _c;
            return _this.api.request(fn)({
                symbol: symbol,
                outputsize: outputsize,
                datatype: datatype
            });
        }; };
        this.daily = this.dailySeries("TIME_SERIES_DAILY");
        this.daily_adjusted = this.dailySeries("TIME_SERIES_DAILY_ADJUSTED");
        this.series = function (fn) { return function (symbol, _a) {
            var _b = _a.datatype, datatype = _b === void 0 ? "json" : _b;
            return _this.api.request(fn)({ symbol: symbol, datatype: datatype });
        }; };
        this.weekly = this.series("TIME_SERIES_WEEKLY");
        this.weekly_adjusted = this.series("TIME_SERIES_WEEKLY_ADJUSTED");
        this.monthly = this.series("TIME_SERIES_MONTHLY");
        this.monthly_adjusted = this.series("TIME_SERIES_MONTHLY_ADJUSTED");
        this.quote = this.series("GLOBAL_QUOTE");
        this.batch = function (symbols) {
            return _this.api.request("BATCH_STOCK_QUOTES")({
                symbols: symbols instanceof Array ? symbols.join(",") : symbols
            });
        };
        this.search = function (keywords) {
            return _this.api.request("SYMBOL_SEARCH")({ keywords: keywords });
        };
        this.api = api;
    }
    return Stocks;
}());
exports.default = Stocks;
//# sourceMappingURL=stocks.js.map