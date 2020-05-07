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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var constants = __importStar(require("./constants"));
var Api = /** @class */ (function () {
    function Api(apiKey) {
        var _this = this;
        this.polish = function (data) {
            if (typeof data !== "object") {
                return data;
            }
            var clean = {};
            Object.keys(data).forEach(function (aKey) {
                var key = aKey.toString();
                if (constants.timestamp.test(key)) {
                    clean[new Date(key).toISOString()] = _this.polish(data[key]);
                }
                else if (constants.cryptoMarketPrice.test(key)) {
                    clean["market"] = _this.polish(data[key]);
                }
                else if (constants.cryptoMarketOpen.test(key)) {
                    clean["market_open"] = _this.polish(data[key]);
                }
                else if (constants.cryptoMarketHigh.test(key)) {
                    clean["market_high"] = _this.polish(data[key]);
                }
                else if (constants.cryptoMarketLow.test(key)) {
                    clean["market_low"] = _this.polish(data[key]);
                }
                else if (constants.cryptoMarketClose.test(key)) {
                    clean["market_close"] = _this.polish(data[key]);
                }
                else {
                    clean[constants.keys[key] || key] = _this.polish(data[key]);
                }
            });
            return clean;
        };
        this.getUrl = function (params) {
            var query = Object.keys(params || {})
                .filter(function (key) { return params[key] !== undefined; })
                .map(function (type) { return type + "=" + params[type]; })
                .join("&");
            return "" + _this.baseUrl + query;
        };
        this.request = function (fn) { return function (params) {
            var url = _this.getUrl(__assign(__assign({}, params), { function: fn }));
            return cross_fetch_1.default(url)
                .then(function (res) {
                if (res.status !== 200) {
                    throw "An AlphaVantage error occurred (" + url + "). " + res.status + ": " + res.body;
                }
                return res.json();
            })
                .then(function (data) {
                if (data["Meta Data"] === undefined &&
                    data["Realtime Currency Exchange Rate"] === undefined &&
                    data["Global Quote"] === undefined) {
                    throw "An AlphaVantage error occurred. " + (data["Information"] ||
                        JSON.stringify(data));
                }
                return data;
            });
        }; };
        this.baseUrl = "https://www.alphavantage.co/query?apikey=" + apiKey + "&";
    }
    Api.prototype.setApiKey = function (apiKey) {
        this.baseUrl = "https://www.alphavantage.co/query?apikey=" + apiKey + "&";
    };
    return Api;
}());
exports.default = Api;
//# sourceMappingURL=api.js.map