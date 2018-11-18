import Api from "./api";
declare class Crypto {
    api: Api;
    intraday: (symbol: string, market: string) => Promise<any>;
    daily: (symbol: string, market: string) => Promise<any>;
    weekly: (symbol: string, market: string) => Promise<any>;
    monthly: (symbol: string, market: string) => Promise<any>;
    constructor(api: Api);
    /**
     * Util function to get the crypto data.
     *
     * @param {String} fn
     *   The enum fn available for crypto data.
     *
     * @returns {Function}
     *   A data function to accept user input and returns a promise.
     */
    private series;
}
export default Crypto;
//# sourceMappingURL=crypto.d.ts.map