# alphavantage-ts

[![Build Status](https://travis-ci.org/adamjking3/alphavantage-ts.svg?branch=master)](https://travis-ci.org/adamjking3/alphavantage-ts)
[![Coverage Status](https://coveralls.io/repos/github/adamjking3/alphavantage-ts/badge.svg?branch=master)](https://coveralls.io/github/adamjking3/alphavantage-ts?branch=master)

This is a simple Typescript wrapper around the [Alpha Vantage API](https://www.alphavantage.co/documentation/) hosted on [NPM](https://www.npmjs.com/package/alphavantage-ts). I have no affiliation with AlphaVantage.

All contributions are welcome! This is an open source project under the MIT license, see [LICENSE.md](LICENSE.md) for additional information.

`All available functions with this SDK have the same parameters as listed in the the Alpha Vantage Docs, without the "function" or "apikey". Do not include the "function" or "apikey" parameters when using this library. All functions return promises with the response data.`

## Installation

```bash
npm i alphavantage-ts
```

or

```bash
yarn add alphavantage-ts
```

## Usage

```typescript
import AlphaVantage from "alphavantage-ts";

const alpha = new AlphaVantage("YOUR_API_KEY_HERE");

// Simple examples
alpha.stocks.intraday("msft").then(data => {
  console.log(data);
});

alpha.stocks.batch(["msft", "aapl"]).then(data => {
  console.log(data);
});

alpha.forex.rate("btc", "usd").then(data => {
  console.log(data);
});

alpha.crypto.intraday("btc", "usd").then(data => {
  console.log(data);
});

alpha.technicals.sma("msft", "daily", 60, "close").then(data => {
  console.log(data);
});

alpha.sectors.performance().then(data => {
  console.log(data);
});
```

## Util

Data polishing

- Rewrite weird data keys to be consistent across all api calls. This is an optional utility you can use with the result of any api call.

```typescript
const polished = alpha.api.polish(data);
```

## Stocks

See [Alpha Vantage](https://www.alphavantage.co/documentation/#time-series-data) for the parameters.

```typescript
alpha.stocks.intraday(symbol, { outputsize, datatype, interval })
alpha.stocks.daily(symbol, { outputsize, datatype })
alpha.stocks.daily_adjusted(symbol, { outputsize, datatype })
alpha.stocks.weekly(symbol, { outputsize })
alpha.stocks.weekly_adjusted(symbol, { outputsize })
alpha.stocks.monthly(symbol, { outputsize })
alpha.stocks.monthly_adjusted(symbol, { outputsize })
alpha.stocks.quote(symbol, { outputsize })
alpha.stocks.batch([symbol1, symbol2..])
alpha.stocks.search(symbol)
```

## Forex

See [Alpha Vantage](https://www.alphavantage.co/documentation/#fx) for the parameters.

```typescript
alpha.forex.rate(from_currency, to_currency);
```

## Crypto

See [Alpha Vantage](https://www.alphavantage.co/documentation/#digital-currency) for the parameters.

```typescript
alpha.crypto.intraday(symbol, market);
alpha.crypto.daily(symbol, market);
alpha.crypto.weekly(symbol, market);
alpha.crypto.monthly(symbol, market);
```

## Technicals

See [Alpha Vantage](https://www.alphavantage.co/documentation/#technical-indicators) for the parameters.

```typescript
alpha.technicals.sma(symbol, { interval, time_period, series_type });
alpha.technicals.ema(symbol, { interval, time_period, series_type });
alpha.technicals.wma(symbol, { interval, time_period, series_type });
alpha.technicals.dema(symbol, { interval, time_period, series_type });
alpha.technicals.tema(symbol, { interval, time_period, series_type });
alpha.technicals.trima(symbol, { interval, time_period, series_type });
alpha.technicals.kama(symbol, { interval, time_period, series_type });
alpha.technicals.mama(symbol, { interval, series_type, fastlimit, slowlimit });
alpha.technicals.t3(symbol, { interval, time_period, series_type });
alpha.technicals.macd(symbol, {
  interval,
  series_type,
  fastperiod,
  slowperiod,
  signalperiod
});
alpha.technicals.macdext(symbol, {
  interval,
  series_type,
  fastperiod,
  slowperiod,
  signalperiod,
  fastmatype,
  slowmatype,
  signalmatype
});
alpha.technicals.stoch(symbol, {
  interval,
  fastkperiod,
  slowkperiod,
  slowdperiod,
  slowkmatype,
  slowdmatype
});
alpha.technicals.stochf(symbol, {
  interval,
  fastkperiod,
  fastdperiod,
  fastdmatype
});
alpha.technicals.rsi(symbol, { interval, time_period, series_type });
alpha.technicals.stochrsi(symbol, {
  interval,
  time_period,
  series_type,
  fastkperiod,
  slowdperiod,
  fastdmatype
});
alpha.technicals.willr(symbol, { interval, time_period });
alpha.technicals.adx(symbol, { interval, time_period });
alpha.technicals.adxr(symbol, { interval, time_period });
alpha.technicals.apo(symbol, {
  interval,
  series_type,
  fastperiod,
  slowperiod,
  matype
});
alpha.technicals.ppo(symbol, {
  interval,
  series_type,
  fastperiod,
  slowperiod,
  matype
});
alpha.technicals.mom(symbol, { interval, time_period, series_type });
alpha.technicals.bop(symbol, { interval });
alpha.technicals.cci(symbol, { interval, time_period });
alpha.technicals.cmo(symbol, { interval, time_period, series_type });
alpha.technicals.roc(symbol, { interval, time_period, series_type });
alpha.technicals.rocr(symbol, { interval, time_period, series_type });
alpha.technicals.aroon(symbol, { interval, time_period });
alpha.technicals.aroonosc(symbol, { interval, time_period });
alpha.technicals.mfi(symbol, { interval, time_period });
alpha.technicals.trix(symbol, { interval, time_period, series_type });
alpha.technicals.ultosc(symbol, {
  interval,
  timeperiod1,
  timeperiod2,
  timeperiod3
});
alpha.technicals.dx(symbol, { interval, time_period });
alpha.technicals.minus_di(symbol, { interval, time_period });
alpha.technicals.plus_di(symbol, { interval, time_period });
alpha.technicals.minus_dm(symbol, { interval, time_period });
alpha.technicals.plus_dm(symbol, { interval, time_period });
alpha.technicals.bbands(symbol, {
  interval,
  time_period,
  series_type,
  nbdevup,
  nbdevdn
});
alpha.technicals.midpoint(symbol, { interval, time_period, series_type });
alpha.technicals.midprice(symbol, { interval, time_period });
alpha.technicals.sar(symbol, { interval, acceleration, maximum });
alpha.technicals.trange(symbol, { interval });
alpha.technicals.atr(symbol, { interval, time_period });
alpha.technicals.natr(symbol, { interval, time_period });
alpha.technicals.ad(symbol, { interval });
alpha.technicals.adosc(symbol, { interval, fastperiod, slowperiod });
alpha.technicals.obv(symbol, { interval });
alpha.technicals.ht_trendline(symbol, { interval, series_type });
alpha.technicals.ht_sine(symbol, { interval, series_type });
alpha.technicals.ht_trendmode(symbol, { interval, series_type });
alpha.technicals.ht_dcperiod(symbol, { interval, series_type });
alpha.technicals.ht_dcphase(symbol, { interval, series_type });
alpha.technicals.ht_dcphasor(symbol, { interval, series_type });
```

## Sector Performance

See [Alpha Vantage](https://www.alphavantage.co/documentation/#sector-information) for the parameters.

```typescript
alpha.sectors.performance();
```

## Contributing

All contributions are welcome! The purpose of this library is to keep function parity with the Alpha Vantage API, while keeping a slim and intuitive programming interface. Before any pull requests are made, please run `npm run lint` to fix style issues and ensure that all test are passing `npm test`. The codebase should always remain at 100% test coverage.
