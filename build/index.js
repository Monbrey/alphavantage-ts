import Api from "./api";
import Stocks from "./stocks";
import Crypto from "./crypto";
import Forex from "./forex";
import Technicals from "./technicals";
import Sectors from "./sectors";
var AlphaVantage = /** @class */ (function () {
    function AlphaVantage(apiKey) {
        this.api = new Api(apiKey);
        this.stocks = new Stocks(this.api);
        this.crypto = new Crypto(this.api);
        this.forex = new Forex(this.api);
        this.technicals = new Technicals(this.api);
        this.performance = new Sectors(this.api);
    }
    return AlphaVantage;
}());
export default AlphaVantage;
