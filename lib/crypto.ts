import Api from "./api";

class Crypto {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  private series = (fn: string) => (symbol: string, market: string) => {
    return this.api.request(fn)({ symbol, market });
  };

  public intraday = this.series("DIGITAL_CURRENCY_INTRADAY");
  public daily = this.series("DIGITAL_CURRENCY_DAILY");
  public weekly = this.series("DIGITAL_CURRENCY_WEEKLY");
  public monthly = this.series("DIGITAL_CURRENCY_MONTHLY");
}

export default Crypto;
