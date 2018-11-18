import Api from "./api";

class Forex {
  public api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  public rate = (from_currency: string, to_currency: string) =>
    this.api.request("CURRENCY_EXCHANGE_RATE")({ from_currency, to_currency });
}

export default Forex;
