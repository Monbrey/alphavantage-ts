import Api from "./api";

export interface TimeSeriesParameters {
  interval:
    | "1min"
    | "5min"
    | "15min"
    | "30min"
    | "60min"
    | "daily"
    | "weekly"
    | "monthly";
}

export interface MultiTimeSeriesParameters extends TimeSeriesParameters {
  series_type: "close" | "open" | "high" | "low";
}

export interface TimePeriodSeriesParameters extends MultiTimeSeriesParameters {
  time_period: number;
}

export interface MultiPeriodSeriesParameters extends MultiTimeSeriesParameters {
  fastperiod?: number;
  slowperiod?: number;
  matype?: number;
}

export interface MultiPeriodAndMaSeriesParameters
  extends MultiTimeSeriesParameters {
  fastperiod?: number;
  slowperiod?: number;
  signalperiod?: number;
  fastmatype?: number;
  slowmatype?: number;
  signalmatype?: number;
}

class Technicals {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  private timePeriodSeries = (fn: string) => (
    symbol: string,
    { interval, time_period, series_type }: TimePeriodSeriesParameters
  ) => {
    return this.api.request(fn)({ symbol, interval, time_period, series_type });
  };

  private multiPeriodSeries = (fn: string) => (
    symbol: string,
    {
      interval,
      series_type,
      fastperiod,
      slowperiod,
      matype
    }: MultiPeriodSeriesParameters
  ) => {
    return this.api.request(fn)({
      symbol,
      interval,
      series_type,
      ...(fastperiod ? { fastperiod } : {}),
      ...(slowperiod ? { slowperiod } : {}),
      ...(matype ? { matype } : {})
    });
  };

  private multiPeriodAndMaSeries = (fn: string) => (
    symbol: string,
    {
      interval,
      series_type,
      fastperiod = 12,
      slowperiod = 26,
      signalperiod = 9,
      fastmatype,
      slowmatype,
      signalmatype
    }: MultiPeriodAndMaSeriesParameters
  ) => {
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

  private multiTimeSeriesParameters = (fn: string) => (
    symbol: string,
    { interval, series_type }: MultiTimeSeriesParameters
  ) => {
    return this.api.request(fn)({ symbol, interval, series_type });
  };

  public sma = this.timePeriodSeries("SMA");
  public ema = this.timePeriodSeries("EMA");
  public wma = this.timePeriodSeries("WMA");
  public dema = this.timePeriodSeries("DEMA");
  public tema = this.timePeriodSeries("TEMA");
  public trima = this.timePeriodSeries("TRIMA");
  public kama = this.timePeriodSeries("KAMA");
  public mama = (
    symbol: string,
    {
      interval,
      series_type,
      fastlimit = 0.01,
      slowlimit = 0.01
    }: TimeSeriesParameters & any
  ) =>
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
  public stoch = (
    symbol: string,
    {
      interval,
      fastkperiod,
      slowkperiod,
      slowdperiod,
      slowkmatype,
      slowdmatype
    }: TimeSeriesParameters & any
  ) =>
    this.api.request("STOCH")({
      symbol,
      interval,
      fastkperiod,
      slowkperiod,
      slowdperiod,
      slowkmatype,
      slowdmatype
    });
  public stochf = (
    symbol: string,
    {
      interval,
      fastkperiod,
      fastdperiod,
      fastdmatype
    }: TimeSeriesParameters & any
  ) =>
    this.api.request("STOCHF")({
      symbol,
      interval,
      fastkperiod,
      fastdperiod,
      fastdmatype
    });
  public rsi = this.timePeriodSeries("RSI");
  public stochrsi = (
    symbol: string,
    {
      interval,
      time_period,
      series_type,
      fastkperiod,
      fastdperiod,
      fastdmatype
    }: TimeSeriesParameters & any
  ) =>
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
  public ultosc = (
    symbol: string,
    {
      interval,
      timeperiod1,
      timeperiod2,
      timeperiod3
    }: TimeSeriesParameters & any
  ) =>
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
  public bbands = (
    symbol: string,
    {
      interval,
      time_period,
      series_type,
      nbdevup,
      nbdevdn,
      matype
    }: TimeSeriesParameters & any
  ) =>
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
  public sar = (
    symbol: string,
    { interval, acceleration, maximum }: TimeSeriesParameters & any
  ) => this.api.request("SAR")({ symbol, interval, acceleration, maximum });
  public trange = this.timePeriodSeries("TRANGE");
  public atr = this.timePeriodSeries("ATR");
  public natr = this.timePeriodSeries("NATR");
  public ad = this.timePeriodSeries("AD");
  public adosc = (
    symbol: string,
    { interval, fastperiod, slowperiod }: TimeSeriesParameters & any
  ) => this.api.request("ADOSC")({ symbol, interval, fastperiod, slowperiod });
  public obv = this.timePeriodSeries("OBV");
  public ht_trendline = this.multiTimeSeriesParameters("HT_TRENDLINE");
  public ht_sine = this.multiTimeSeriesParameters("HT_SINE");
  public ht_trendmode = this.multiTimeSeriesParameters("HT_TRENDMODE");
  public ht_dcperiod = this.multiTimeSeriesParameters("HT_DCPERIOD");
  public ht_dcphase = this.multiTimeSeriesParameters("HT_DCPHASE");
  public ht_dcphasor = this.multiTimeSeriesParameters("HT_PHASOR");
}

export default Technicals;
