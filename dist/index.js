"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./api"));
var stocks_1 = __importDefault(require("./stocks"));
var crypto_1 = __importDefault(require("./crypto"));
var forex_1 = __importDefault(require("./forex"));
var technicals_1 = __importDefault(require("./technicals"));
var sectors_1 = __importDefault(require("./sectors"));
var AlphaVantage = /** @class */ (function () {
    function AlphaVantage(apiKey) {
        this.api = new api_1.default(apiKey);
        this.stocks = new stocks_1.default(this.api);
        this.crypto = new crypto_1.default(this.api);
        this.forex = new forex_1.default(this.api);
        this.technicals = new technicals_1.default(this.api);
        this.performance = new sectors_1.default(this.api);
    }
    return AlphaVantage;
}());
exports.default = AlphaVantage;
//# sourceMappingURL=index.js.map