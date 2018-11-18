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
import * as request from "request-promise-native";
import * as constants from "./constants";
var Api = /** @class */ (function () {
    function Api(apiKey) {
        var _this = this;
        /**
         * Recursively walk the data tree and replace weird keys with a normalized set.
         *
         * @param {Object|String|Number} data
         *   The data to normalize.
         *
         * @returns {Object|String|Number}
         *   Normalized data.
         */
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
        /**
         * Util function to build the proper API url.
         *
         * @param {Object} params
         *   The parameter object as type:value pairs.
         *
         * @returns {String}
         *   The API url to use for a given function and input parameters.
         */
        this.getUrl = function (params) {
            var query = Object.keys(params || {})
                .filter(function (key) { return params[key] !== undefined; })
                .map(function (type) { return type + "=" + params[type]; })
                .join("&");
            return "" + _this.baseUrl + query;
        };
        /**
         * Wrapper function generator for any endpoint.
         *
         * @param {String} fn
         *   The API function type to use
         *
         * @returns {Function}
         *   The callback function to use in the sdk.
         */
        this.request = function (fn) { return function (params) {
            var url = _this.getUrl(__assign({}, params, { function: fn }));
            return request
                .get(url, {
                resolveWithFullResponse: true,
                simple: false
            })
                .then(function (_a) {
                var body = _a.body, statusCode = _a.statusCode;
                if (statusCode !== 200) {
                    throw "An AlphaVantage error occurred. " + statusCode + ": " + body;
                }
                return JSON.parse(body);
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
    return Api;
}());
export default Api;
