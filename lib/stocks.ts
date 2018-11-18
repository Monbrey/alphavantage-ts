import Api from "./api";

export type OutputSize = "compact" | "full";

export type DataType = "json" | "csv";

export type TimeInterval = "1min" | "5min" | "15min" | "30min" | "60min";

class Stocks {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  public intraday = (
    symbol: string,
    {
      interval,
      outputsize = "compact",
      datatype = "json"
    }: { interval: TimeInterval; outputsize?: OutputSize; datatype?: DataType }
  ) => {
    return this.api.request("TIME_SERIES_INTRADAY")({
      symbol,
      interval,
      outputsize,
      datatype
    });
  };

  private dailySeries = (fn: string) => (
    symbol: string,
    {
      outputsize = "compact",
      datatype = "json"
    }: { outputsize?: OutputSize; datatype?: DataType }
  ) => {
    return this.api.request(fn)({
      symbol,
      outputsize,
      datatype
    });
  };

  public daily = this.dailySeries("TIME_SERIES_DAILY");
  public daily_adjusted = this.dailySeries("TIME_SERIES_DAILY_ADJUSTED");

  private series = (fn: string) => (
    symbol: string,
    { datatype = "json" }: { datatype?: DataType }
  ) => {
    return this.api.request(fn)({ symbol, datatype });
  };

  public weekly = this.series("TIME_SERIES_WEEKLY");
  public weekly_adjusted = this.series("TIME_SERIES_WEEKLY_ADJUSTED");
  public monthly = this.series("TIME_SERIES_MONTHLY");
  public monthly_adjusted = this.series("TIME_SERIES_MONTHLY_ADJUSTED");
  public quote = this.series("GLOBAL_QUOTE");

  public batch = (symbols: string | string[]) => {
    return this.api.request("BATCH_STOCK_QUOTES")({
      symbols: symbols instanceof Array ? symbols.join(",") : symbols
    });
  };

  public search = (keywords: string) => {
    return this.api.request("SYMBOL_SEARCH")({ keywords });
  };
}

export default Stocks;
