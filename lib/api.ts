import * as request from "request-promise-native";
import { RequestResponse } from "request";

import * as constants from "./constants";

class Api {
  public baseUrl: string;

  constructor(apiKey: string) {
    this.baseUrl = `https://www.alphavantage.co/query?apikey=${apiKey}&`;
  }

  public polish = (data: { [key: string]: string } | string | number) => {
    if (typeof data !== "object") {
      return data;
    }

    const clean: { [key: string]: any } = {};

    Object.keys(data).forEach(aKey => {
      const key = aKey.toString();

      if (constants.timestamp.test(key)) {
        clean[new Date(key).toISOString()] = this.polish(data[key]);
      } else if (constants.cryptoMarketPrice.test(key)) {
        clean["market"] = this.polish(data[key]);
      } else if (constants.cryptoMarketOpen.test(key)) {
        clean["market_open"] = this.polish(data[key]);
      } else if (constants.cryptoMarketHigh.test(key)) {
        clean["market_high"] = this.polish(data[key]);
      } else if (constants.cryptoMarketLow.test(key)) {
        clean["market_low"] = this.polish(data[key]);
      } else if (constants.cryptoMarketClose.test(key)) {
        clean["market_close"] = this.polish(data[key]);
      } else {
        clean[constants.keys[key] || key] = this.polish(data[key]);
      }
    });

    return clean;
  };

  public getUrl = (params: { [key: string]: string }) => {
    const query = Object.keys(params || {})
      .filter(key => params[key] !== undefined)
      .map(type => `${type}=${params[type]}`)
      .join("&");

    return `${this.baseUrl}${query}`;
  };

  public request = (fn: string) => (params: {
    [key: string]: string | number;
  }) => {
    const url = this.getUrl({ ...params, function: fn });

    return request
      .get(url, {
        resolveWithFullResponse: true,
        simple: false
      })
      .then(({ body, statusCode }: RequestResponse) => {
        if (statusCode !== 200) {
          throw `An AlphaVantage error occurred. ${statusCode}: ${body}`;
        }

        return JSON.parse(body);
      })
      .then((data: { [key: string]: any }) => {
        if (
          data["Meta Data"] === undefined &&
          data["Realtime Currency Exchange Rate"] === undefined &&
          data["Global Quote"] === undefined
        ) {
          throw `An AlphaVantage error occurred. ${data["Information"] ||
            JSON.stringify(data)}`;
        }

        return data;
      });
  };
}

export default Api;
