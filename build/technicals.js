"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Technicals = /** @class */ (function () {
    function Technicals(api) {
        var _this = this;
        /**
         * A generic function generator for sma-like technicals.
         *
         * @param {String} fn
         *   The sma-like function to use
         */
        this.timePeriodSeries = function (fn) { return function (_a) {
            var symbol = _a.symbol, interval = _a.interval, time_period = _a.time_period, series_type = _a.series_type;
            return _this.api.request(fn)({ symbol: symbol, interval: interval, time_period: time_period, series_type: series_type });
        }; };
        /**
         * A generic function generator for apo-like technicals.
         *
         * @param {String} fn
         *   The apo-like function to use
         */
        this.multiPeriodSeries = function (fn) { return function (_a) {
            var symbol = _a.symbol, interval = _a.interval, series_type = _a.series_type, fastperiod = _a.fastperiod, slowperiod = _a.slowperiod, matype = _a.matype;
            return _this.api.request(fn)(__assign({ symbol: symbol,
                interval: interval,
                series_type: series_type }, (fastperiod ? { fastperiod: fastperiod } : {}), (slowperiod ? { slowperiod: slowperiod } : {}), (matype ? { matype: matype } : {})));
        }; };
        /**
         * A generic function generator for macdext-like technicals.
         *
         * @param {String} fn
         *   The macdext-like function to use
         */
        this.multiPeriodAndMaSeries = function (fn) { return function (_a) {
            var symbol = _a.symbol, interval = _a.interval, series_type = _a.series_type, _b = _a.fastperiod, fastperiod = _b === void 0 ? 12 : _b, _c = _a.slowperiod, slowperiod = _c === void 0 ? 26 : _c, _d = _a.signalperiod, signalperiod = _d === void 0 ? 9 : _d, fastmatype = _a.fastmatype, slowmatype = _a.slowmatype, signalmatype = _a.signalmatype;
            return _this.api.request(fn)(__assign({ symbol: symbol,
                interval: interval,
                series_type: series_type }, (fastperiod ? { fastperiod: fastperiod } : {}), (slowperiod ? { slowperiod: slowperiod } : {}), (signalperiod ? { signalperiod: signalperiod } : {}), (fastmatype ? { fastmatype: fastmatype } : {}), (slowmatype ? { slowmatype: slowmatype } : {}), (signalmatype ? { signalmatype: signalmatype } : {})));
        }; };
        /**
         * A generic function generator for ht-like technicals.
         *
         * @param {String} fn
         *   The ht-like function to use
         */
        this.HT_LIKE = function (fn) { return function (_a) {
            var symbol = _a.symbol, interval = _a.interval, series_type = _a.series_type;
            return _this.api.request(fn)({ symbol: symbol, interval: interval, series_type: series_type });
        }; };
        this.sma = this.timePeriodSeries("SMA");
        this.ema = this.timePeriodSeries("EMA");
        this.wma = this.timePeriodSeries("WMA");
        this.dema = this.timePeriodSeries("DEMA");
        this.tema = this.timePeriodSeries("TEMA");
        this.trima = this.timePeriodSeries("TRIMA");
        this.kama = this.timePeriodSeries("KAMA");
        this.mama = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, series_type = _a.series_type, _b = _a.fastlimit, fastlimit = _b === void 0 ? 0.01 : _b, _c = _a.slowlimit, slowlimit = _c === void 0 ? 0.01 : _c;
            return _this.api.request("MAMA")({
                symbol: symbol,
                interval: interval,
                series_type: series_type,
                fastlimit: fastlimit,
                slowlimit: slowlimit
            });
        };
        this.t3 = this.timePeriodSeries("T3");
        this.macd = this.multiPeriodAndMaSeries("MACD");
        this.macdext = this.multiPeriodAndMaSeries("MACDEXT");
        this.stoch = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, fastkperiod = _a.fastkperiod, slowkperiod = _a.slowkperiod, slowdperiod = _a.slowdperiod, slowkmatype = _a.slowkmatype, slowdmatype = _a.slowdmatype;
            return _this.api.request("STOCH")({
                symbol: symbol,
                interval: interval,
                fastkperiod: fastkperiod,
                slowkperiod: slowkperiod,
                slowdperiod: slowdperiod,
                slowkmatype: slowkmatype,
                slowdmatype: slowdmatype
            });
        };
        this.stochf = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, fastkperiod = _a.fastkperiod, fastdperiod = _a.fastdperiod, fastdmatype = _a.fastdmatype;
            return _this.api.request("STOCHF")({
                symbol: symbol,
                interval: interval,
                fastkperiod: fastkperiod,
                fastdperiod: fastdperiod,
                fastdmatype: fastdmatype
            });
        };
        this.rsi = this.timePeriodSeries("RSI");
        this.stochrsi = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, time_period = _a.time_period, series_type = _a.series_type, fastkperiod = _a.fastkperiod, fastdperiod = _a.fastdperiod, fastdmatype = _a.fastdmatype;
            return _this.api.request("STOCHRSI")({
                symbol: symbol,
                interval: interval,
                time_period: time_period,
                series_type: series_type,
                fastkperiod: fastkperiod,
                fastdperiod: fastdperiod,
                fastdmatype: fastdmatype
            });
        };
        this.willr = this.timePeriodSeries("WILLR");
        this.adx = this.timePeriodSeries("ADX");
        this.adxr = this.timePeriodSeries("ADXR");
        this.apo = this.multiPeriodSeries("APO");
        this.ppo = this.multiPeriodSeries("PPO");
        this.mom = this.timePeriodSeries("MOM");
        this.bop = this.timePeriodSeries("BOP");
        this.cci = this.timePeriodSeries("CCI");
        this.cmo = this.timePeriodSeries("CMO");
        this.roc = this.timePeriodSeries("ROC");
        this.rocr = this.timePeriodSeries("ROCR");
        this.aroon = this.timePeriodSeries("AROON");
        this.aroonosc = this.timePeriodSeries("AROONOSC");
        this.mfi = this.timePeriodSeries("MFI");
        this.trix = this.timePeriodSeries("TRIX");
        this.ultosc = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, timeperiod1 = _a.timeperiod1, timeperiod2 = _a.timeperiod2, timeperiod3 = _a.timeperiod3;
            return _this.api.request("ULTOSC")({
                symbol: symbol,
                interval: interval,
                timeperiod1: timeperiod1,
                timeperiod2: timeperiod2,
                timeperiod3: timeperiod3
            });
        };
        this.dx = this.timePeriodSeries("DX");
        this.minus_di = this.timePeriodSeries("MINUS_DI");
        this.plus_di = this.timePeriodSeries("PLUS_DI");
        this.minus_dm = this.timePeriodSeries("MINUS_DM");
        this.plus_dm = this.timePeriodSeries("PLUS_DM");
        this.bbands = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, time_period = _a.time_period, series_type = _a.series_type, nbdevup = _a.nbdevup, nbdevdn = _a.nbdevdn, matype = _a.matype;
            return _this.api.request("BBANDS")({
                symbol: symbol,
                interval: interval,
                time_period: time_period,
                series_type: series_type,
                nbdevup: nbdevup,
                nbdevdn: nbdevdn,
                matype: matype
            });
        };
        this.midpoint = this.timePeriodSeries("MIDPOINT");
        this.midprice = this.timePeriodSeries("MIDPRICE");
        this.sar = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, acceleration = _a.acceleration, maximum = _a.maximum;
            return _this.api.request("SAR")({ symbol: symbol, interval: interval, acceleration: acceleration, maximum: maximum });
        };
        this.trange = this.timePeriodSeries("TRANGE");
        this.atr = this.timePeriodSeries("ATR");
        this.natr = this.timePeriodSeries("NATR");
        this.ad = this.timePeriodSeries("AD");
        this.adosc = function (_a) {
            var symbol = _a.symbol, interval = _a.interval, fastperiod = _a.fastperiod, slowperiod = _a.slowperiod;
            return _this.api.request("ADOSC")({ symbol: symbol, interval: interval, fastperiod: fastperiod, slowperiod: slowperiod });
        };
        this.obv = this.timePeriodSeries("OBV");
        this.ht_trendline = this.HT_LIKE("HT_TRENDLINE");
        this.ht_sine = this.HT_LIKE("HT_SINE");
        this.ht_trendmode = this.HT_LIKE("HT_TRENDMODE");
        this.ht_dcperiod = this.HT_LIKE("HT_DCPERIOD");
        this.ht_dcphase = this.HT_LIKE("HT_DCPHASE");
        this.ht_dcphasor = this.HT_LIKE("HT_PHASOR");
        this.api = api;
    }
    return Technicals;
}());
exports.default = Technicals;
//# sourceMappingURL=technicals.js.map