import Api from "./api";

export interface StockSeriesParameters {
  outputsize?: string;
  datatype?: string;
  interval?: string;
}

class Stocks {
  public api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  private series = (fn: string) => (
    symbol: string,
    {
      outputsize = "compact",
      datatype = "json",
      interval = "1min"
    }: StockSeriesParameters
  ) => {
    return this.api.request(fn)({
      symbol,
      interval,
      outputsize,
      datatype
    });
  };

  public batch = (symbols: string | string[]) => {
    return this.api.request("BATCH_STOCK_QUOTES")({
      symbols: symbols instanceof Array ? symbols.join(",") : symbols
    });
  };

  public search = (keywords: string) => {
    return this.api.request("SYMBOL_SEARCH")({ keywords });
  };

  public intraday = this.series("TIME_SERIES_INTRADAY");
  public daily = this.series("TIME_SERIES_DAILY");
  public daily_adjusted = this.series("TIME_SERIES_DAILY_ADJUSTED");
  public weekly = this.series("TIME_SERIES_WEEKLY");
  public weekly_adjusted = this.series("TIME_SERIES_WEEKLY_ADJUSTED");
  public monthly = this.series("TIME_SERIES_MONTHLY");
  public monthly_adjusted = this.series("TIME_SERIES_MONTHLY_ADJUSTED");
  public quote = this.series("GLOBAL_QUOTE");
}

export default Stocks;
