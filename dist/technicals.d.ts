import Api from "./api";
export interface TimeSeriesParameters {
    interval: "1min" | "5min" | "15min" | "30min" | "60min" | "daily" | "weekly" | "monthly";
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
export interface MultiPeriodAndMaSeriesParameters extends MultiTimeSeriesParameters {
    fastperiod?: number;
    slowperiod?: number;
    signalperiod?: number;
    fastmatype?: number;
    slowmatype?: number;
    signalmatype?: number;
}
declare class Technicals {
    private api;
    constructor(api: Api);
    private timePeriodSeries;
    private multiPeriodSeries;
    private multiPeriodAndMaSeries;
    private multiTimeSeriesParameters;
    sma: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ema: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    wma: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    dema: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    tema: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    trima: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    kama: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    mama: (symbol: string, { interval, series_type, fastlimit, slowlimit }: any) => Promise<{
        [key: string]: any;
    }>;
    t3: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    macd: (symbol: string, { interval, series_type, fastperiod, slowperiod, signalperiod, fastmatype, slowmatype, signalmatype }: MultiPeriodAndMaSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    macdext: (symbol: string, { interval, series_type, fastperiod, slowperiod, signalperiod, fastmatype, slowmatype, signalmatype }: MultiPeriodAndMaSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    stoch: (symbol: string, { interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype }: any) => Promise<{
        [key: string]: any;
    }>;
    stochf: (symbol: string, { interval, fastkperiod, fastdperiod, fastdmatype }: any) => Promise<{
        [key: string]: any;
    }>;
    rsi: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    stochrsi: (symbol: string, { interval, time_period, series_type, fastkperiod, fastdperiod, fastdmatype }: any) => Promise<{
        [key: string]: any;
    }>;
    willr: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    adx: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    adxr: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    apo: (symbol: string, { interval, series_type, fastperiod, slowperiod, matype }: MultiPeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ppo: (symbol: string, { interval, series_type, fastperiod, slowperiod, matype }: MultiPeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    mom: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    bop: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    cci: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    cmo: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    roc: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    rocr: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    aroon: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    aroonosc: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    mfi: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    trix: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ultosc: (symbol: string, { interval, timeperiod1, timeperiod2, timeperiod3 }: any) => Promise<{
        [key: string]: any;
    }>;
    dx: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    minus_di: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    plus_di: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    minus_dm: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    plus_dm: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    bbands: (symbol: string, { interval, time_period, series_type, nbdevup, nbdevdn, matype }: any) => Promise<{
        [key: string]: any;
    }>;
    midpoint: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    midprice: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    sar: (symbol: string, { interval, acceleration, maximum }: any) => Promise<{
        [key: string]: any;
    }>;
    trange: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    atr: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    natr: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ad: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    adosc: (symbol: string, { interval, fastperiod, slowperiod }: any) => Promise<{
        [key: string]: any;
    }>;
    obv: (symbol: string, { interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_trendline: (symbol: string, { interval, series_type }: MultiTimeSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_sine: (symbol: string, { interval, series_type }: MultiTimeSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_trendmode: (symbol: string, { interval, series_type }: MultiTimeSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_dcperiod: (symbol: string, { interval, series_type }: MultiTimeSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_dcphase: (symbol: string, { interval, series_type }: MultiTimeSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_dcphasor: (symbol: string, { interval, series_type }: MultiTimeSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
}
export default Technicals;
//# sourceMappingURL=technicals.d.ts.map