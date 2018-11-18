import Api from "./api";
import Stocks from "./stocks";
import Crypto from "./crypto";
import Forex from "./forex";
import Technicals from "./technicals";
import Sectors from "./sectors";
declare class AlphaVantage {
    api: Api;
    stocks: Stocks;
    crypto: Crypto;
    forex: Forex;
    technicals: Technicals;
    performance: Sectors;
    constructor(apiKey: string);
}
export default AlphaVantage;
//# sourceMappingURL=index.d.ts.map