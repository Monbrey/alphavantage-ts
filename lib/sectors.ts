import Api from "./api";

class Sectors {
  public api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  public performance = () => {
    return this.api.request("SECTOR");
  };
}

export default Sectors;
