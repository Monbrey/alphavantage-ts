import Api from "./api";

export interface TimeSeriesParameters {
  symbol: string;
  interval: string;
}

export interface TimePeriodSeriesParameters extends TimeSeriesParameters {
  series_type: string;
  time_period: string;
}

export interface MultiPeriodSeriesParameters extends TimeSeriesParameters {
  series_type: string;
  fastperiod?: number;
  slowperiod?: number;
  matype?: number;
}

export interface MultiPeriodAndMaSeriesParameters extends TimeSeriesParameters {
  series_type: string;
  fastperiod?: number;
  slowperiod?: number;
  signalperiod?: number;
  fastmatype?: number;
  slowmatype?: number;
  signalmatype?: number;
}

class Technicals {
  public api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  /**
   * A generic function generator for sma-like technicals.
   *
   * @param {String} fn
   *   The sma-like function to use
   */
  private timePeriodSeries = (fn: string) => ({
    symbol,
    interval,
    time_period,
    series_type
  }: TimePeriodSeriesParameters) => {
    return this.api.request(fn)({ symbol, interval, time_period, series_type });
  };

  /**
   * A generic function generator for apo-like technicals.
   *
   * @param {String} fn
   *   The apo-like function to use
   */
  private multiPeriodSeries = (fn: string) => ({
    symbol,
    interval,
    series_type,
    fastperiod,
    slowperiod,
    matype
  }: MultiPeriodSeriesParameters) => {
    return this.api.request(fn)({
      symbol,
      interval,
      series_type,
      ...(fastperiod ? { fastperiod } : {}),
      ...(slowperiod ? { slowperiod } : {}),
      ...(matype ? { matype } : {})
    });
  };

  /**
   * A generic function generator for macdext-like technicals.
   *
   * @param {String} fn
   *   The macdext-like function to use
   */
  private multiPeriodAndMaSeries = (fn: string) => ({
    symbol,
    interval,
    series_type,
    fastperiod = 12,
    slowperiod = 26,
    signalperiod = 9,
    fastmatype,
    slowmatype,
    signalmatype
  }: MultiPeriodAndMaSeriesParameters) => {
    return this.api.request(fn)({
      symbol,
      interval,
      series_type,
      ...(fastperiod ? { fastperiod } : {}),
      ...(slowperiod ? { slowperiod } : {}),
      ...(signalperiod ? { signalperiod } : {}),
      ...(fastmatype ? { fastmatype } : {}),
      ...(slowmatype ? { slowmatype } : {}),
      ...(signalmatype ? { signalmatype } : {})
    });
  };

  /**
   * A generic function generator for ht-like technicals.
   *
   * @param {String} fn
   *   The ht-like function to use
   */
  private HT_LIKE = (fn: string) => ({
    symbol,
    interval,
    series_type
  }: any) => {
    return this.api.request(fn)({ symbol, interval, series_type });
  };

  public sma = this.timePeriodSeries("SMA");
  public ema = this.timePeriodSeries("EMA");
  public wma = this.timePeriodSeries("WMA");
  public dema = this.timePeriodSeries("DEMA");
  public tema = this.timePeriodSeries("TEMA");
  public trima = this.timePeriodSeries("TRIMA");
  public kama = this.timePeriodSeries("KAMA");
  public mama = ({
    symbol,
    interval,
    series_type,
    fastlimit = 0.01,
    slowlimit = 0.01
  }: TimeSeriesParameters & any) =>
    this.api.request("MAMA")({
      symbol,
      interval,
      series_type,
      fastlimit,
      slowlimit
    });
  public t3 = this.timePeriodSeries("T3");
  public macd = this.multiPeriodAndMaSeries("MACD");
  public macdext = this.multiPeriodAndMaSeries("MACDEXT");
  public stoch = ({
    symbol,
    interval,
    fastkperiod,
    slowkperiod,
    slowdperiod,
    slowkmatype,
    slowdmatype
  }: TimeSeriesParameters & any) =>
    this.api.request("STOCH")({
      symbol,
      interval,
      fastkperiod,
      slowkperiod,
      slowdperiod,
      slowkmatype,
      slowdmatype
    });
  public stochf = ({
    symbol,
    interval,
    fastkperiod,
    fastdperiod,
    fastdmatype
  }: TimeSeriesParameters & any) =>
    this.api.request("STOCHF")({
      symbol,
      interval,
      fastkperiod,
      fastdperiod,
      fastdmatype
    });
  public rsi = this.timePeriodSeries("RSI");
  public stochrsi = ({
    symbol,
    interval,
    time_period,
    series_type,
    fastkperiod,
    fastdperiod,
    fastdmatype
  }: TimeSeriesParameters & any) =>
    this.api.request("STOCHRSI")({
      symbol,
      interval,
      time_period,
      series_type,
      fastkperiod,
      fastdperiod,
      fastdmatype
    });
  public willr = this.timePeriodSeries("WILLR");
  public adx = this.timePeriodSeries("ADX");
  public adxr = this.timePeriodSeries("ADXR");
  public apo = this.multiPeriodSeries("APO");
  public ppo = this.multiPeriodSeries("PPO");
  public mom = this.timePeriodSeries("MOM");
  public bop = this.timePeriodSeries("BOP");
  public cci = this.timePeriodSeries("CCI");
  public cmo = this.timePeriodSeries("CMO");
  public roc = this.timePeriodSeries("ROC");
  public rocr = this.timePeriodSeries("ROCR");
  public aroon = this.timePeriodSeries("AROON");
  public aroonosc = this.timePeriodSeries("AROONOSC");
  public mfi = this.timePeriodSeries("MFI");
  public trix = this.timePeriodSeries("TRIX");
  public ultosc = ({
    symbol,
    interval,
    timeperiod1,
    timeperiod2,
    timeperiod3
  }: TimeSeriesParameters & any) =>
    this.api.request("ULTOSC")({
      symbol,
      interval,
      timeperiod1,
      timeperiod2,
      timeperiod3
    });
  public dx = this.timePeriodSeries("DX");
  public minus_di = this.timePeriodSeries("MINUS_DI");
  public plus_di = this.timePeriodSeries("PLUS_DI");
  public minus_dm = this.timePeriodSeries("MINUS_DM");
  public plus_dm = this.timePeriodSeries("PLUS_DM");
  public bbands = ({
    symbol,
    interval,
    time_period,
    series_type,
    nbdevup,
    nbdevdn,
    matype
  }: TimeSeriesParameters & any) =>
    this.api.request("BBANDS")({
      symbol,
      interval,
      time_period,
      series_type,
      nbdevup,
      nbdevdn,
      matype
    });
  public midpoint = this.timePeriodSeries("MIDPOINT");
  public midprice = this.timePeriodSeries("MIDPRICE");
  public sar = ({
    symbol,
    interval,
    acceleration,
    maximum
  }: TimeSeriesParameters & any) =>
    this.api.request("SAR")({ symbol, interval, acceleration, maximum });
  public trange = this.timePeriodSeries("TRANGE");
  public atr = this.timePeriodSeries("ATR");
  public natr = this.timePeriodSeries("NATR");
  public ad = this.timePeriodSeries("AD");
  public adosc = ({
    symbol,
    interval,
    fastperiod,
    slowperiod
  }: TimeSeriesParameters & any) =>
    this.api.request("ADOSC")({ symbol, interval, fastperiod, slowperiod });
  public obv = this.timePeriodSeries("OBV");
  public ht_trendline = this.HT_LIKE("HT_TRENDLINE");
  public ht_sine = this.HT_LIKE("HT_SINE");
  public ht_trendmode = this.HT_LIKE("HT_TRENDMODE");
  public ht_dcperiod = this.HT_LIKE("HT_DCPERIOD");
  public ht_dcphase = this.HT_LIKE("HT_DCPHASE");
  public ht_dcphasor = this.HT_LIKE("HT_PHASOR");
}

export default Technicals;
