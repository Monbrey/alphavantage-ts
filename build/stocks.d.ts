import Api from "./api";
export interface StockSeriesParameters {
    symbol: string;
    outputsize?: string;
    datatype?: string;
    interval?: string;
    keywords?: string;
}
declare class Stocks {
    api: Api;
    intraday: (params: StockSeriesParameters) => Promise<any>;
    daily: (params: StockSeriesParameters) => Promise<any>;
    daily_adjusted: (params: StockSeriesParameters) => Promise<any>;
    weekly: (params: StockSeriesParameters) => Promise<any>;
    weekly_adjusted: (params: StockSeriesParameters) => Promise<any>;
    monthly: (params: StockSeriesParameters) => Promise<any>;
    monthly_adjusted: (params: StockSeriesParameters) => Promise<any>;
    quote: (params: StockSeriesParameters) => Promise<any>;
    search: (params: StockSeriesParameters) => Promise<any>;
    constructor(api: Api);
    batch: (symbols: string | string[]) => Promise<{
        [key: string]: any;
    }>;
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
    private series;
}
export default Stocks;
//# sourceMappingURL=stocks.d.ts.map