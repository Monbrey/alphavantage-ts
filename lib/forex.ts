import Api from "./api";

class Forex {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  public rate = (from_currency: string, to_currency: string) => {
    return this.api.request("CURRENCY_EXCHANGE_RATE")({
      from_currency,
      to_currency
    });
  };
}

export default Forex;
