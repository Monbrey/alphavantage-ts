var Crypto = /** @class */ (function () {
    function Crypto(api) {
        var _this = this;
        /**
         * Util function to get the crypto data.
         *
         * @param {String} fn
         *   The enum fn available for crypto data.
         *
         * @returns {Function}
         *   A data function to accept user input and returns a promise.
         */
        this.series = function (fn) { return function (symbol, market) {
            return _this.api.request(fn)({
                symbol: symbol,
                market: market
            });
        }; };
        this.api = api;
        this.intraday = this.series("DIGITAL_CURRENCY_INTRADAY");
        this.daily = this.series("DIGITAL_CURRENCY_DAILY");
        this.weekly = this.series("DIGITAL_CURRENCY_WEEKLY");
        this.monthly = this.series("DIGITAL_CURRENCY_MONTHLY");
    }
    return Crypto;
}());
export default Crypto;
