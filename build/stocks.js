var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Stocks = /** @class */ (function () {
    function Stocks(api) {
        var _this = this;
        this.batch = function (symbols) {
            return _this.api.request("BATCH_STOCK_QUOTES")({
                symbols: symbols instanceof Array ? symbols.join(",") : symbols
            });
        };
        /**
         * Util function to get the timeseries data.
         *
         * @TODO: Add input validation.
         *
         * @param {String} fn
         *   The enum fn available for timeseries data.
         *
         * @returns {Function}
         *   A timeseries function to accept user data that returns a promise.
         */
        this.series = function (fn) { return function (_a) {
            var symbol = _a.symbol, _b = _a.outputsize, outputsize = _b === void 0 ? "compact" : _b, _c = _a.datatype, datatype = _c === void 0 ? "json" : _c, _d = _a.interval, interval = _d === void 0 ? "1min" : _d, keywords = _a.keywords;
            return _this.api.request(fn)(__assign({ symbol: symbol,
                interval: interval,
                outputsize: outputsize,
                datatype: datatype }, (keywords ? { keywords: keywords } : {})));
        }; };
        this.api = api;
        this.intraday = this.series("TIME_SERIES_INTRADAY");
        this.daily = this.series("TIME_SERIES_DAILY");
        this.daily_adjusted = this.series("TIME_SERIES_DAILY_ADJUSTED");
        this.weekly = this.series("TIME_SERIES_WEEKLY");
        this.weekly_adjusted = this.series("TIME_SERIES_WEEKLY_ADJUSTED");
        this.monthly = this.series("TIME_SERIES_MONTHLY");
        this.monthly_adjusted = this.series("TIME_SERIES_MONTHLY_ADJUSTED");
        this.quote = this.series("GLOBAL_QUOTE");
        this.search = this.series("SYMBOL_SEARCH");
    }
    return Stocks;
}());
export default Stocks;
