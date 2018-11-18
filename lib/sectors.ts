import Api from "./api";

class Forex {
  public api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  public performance = this.api.request("SECTOR");
}

export default Forex;
