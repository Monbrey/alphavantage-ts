import Api from "./api";

export interface StockSeriesParameters {
  symbol: string;
  outputsize?: string;
  datatype?: string;
  interval?: string;
  keywords?: string;
}

class Stocks {
  public api: Api;

  public intraday: (params: StockSeriesParameters) => Promise<any>;
  public daily: (params: StockSeriesParameters) => Promise<any>;
  public daily_adjusted: (params: StockSeriesParameters) => Promise<any>;
  public weekly: (params: StockSeriesParameters) => Promise<any>;
  public weekly_adjusted: (params: StockSeriesParameters) => Promise<any>;
  public monthly: (params: StockSeriesParameters) => Promise<any>;
  public monthly_adjusted: (params: StockSeriesParameters) => Promise<any>;
  public quote: (params: StockSeriesParameters) => Promise<any>;
  public search: (params: StockSeriesParameters) => Promise<any>;

  constructor(api: Api) {
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

  public batch = (symbols: string | string[]) => {
    return this.api.request("BATCH_STOCK_QUOTES")({
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
  private series = (fn: string) => ({
    symbol,
    outputsize = "compact",
    datatype = "json",
    interval = "1min",
    keywords
  }: StockSeriesParameters) => {
    return this.api.request(fn)({
      symbol,
      interval,
      outputsize,
      datatype,
      ...(keywords ? { keywords } : {})
    });
  };
}

export default Stocks;
