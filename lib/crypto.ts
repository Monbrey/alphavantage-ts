import Api from "./api";

class Crypto {
  public api: Api;

  public intraday: (symbol: string, market: string) => Promise<any>;
  public daily: (symbol: string, market: string) => Promise<any>;
  public weekly: (symbol: string, market: string) => Promise<any>;
  public monthly: (symbol: string, market: string) => Promise<any>;

  constructor(api: Api) {
    this.api = api;

    this.intraday = this.series("DIGITAL_CURRENCY_INTRADAY");
    this.daily = this.series("DIGITAL_CURRENCY_DAILY");
    this.weekly = this.series("DIGITAL_CURRENCY_WEEKLY");
    this.monthly = this.series("DIGITAL_CURRENCY_MONTHLY");
  }

  /**
   * Util function to get the crypto data.
   *
   * @param {String} fn
   *   The enum fn available for crypto data.
   *
   * @returns {Function}
   *   A data function to accept user input and returns a promise.
   */
  private series = (fn: string) => (symbol: string, market: string) => {
    return this.api.request(fn)({
      symbol,
      market
    });
  };
}

export default Crypto;
