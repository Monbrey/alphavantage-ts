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
declare class Technicals {
    api: Api;
    constructor(api: Api);
    /**
     * A generic function generator for sma-like technicals.
     *
     * @param {String} fn
     *   The sma-like function to use
     */
    private timePeriodSeries;
    /**
     * A generic function generator for apo-like technicals.
     *
     * @param {String} fn
     *   The apo-like function to use
     */
    private multiPeriodSeries;
    /**
     * A generic function generator for macdext-like technicals.
     *
     * @param {String} fn
     *   The macdext-like function to use
     */
    private multiPeriodAndMaSeries;
    /**
     * A generic function generator for ht-like technicals.
     *
     * @param {String} fn
     *   The ht-like function to use
     */
    private HT_LIKE;
    sma: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ema: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    wma: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    dema: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    tema: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    trima: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    kama: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    mama: ({ symbol, interval, series_type, fastlimit, slowlimit }: any) => Promise<{
        [key: string]: any;
    }>;
    t3: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    macd: ({ symbol, interval, series_type, fastperiod, slowperiod, signalperiod, fastmatype, slowmatype, signalmatype }: MultiPeriodAndMaSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    macdext: ({ symbol, interval, series_type, fastperiod, slowperiod, signalperiod, fastmatype, slowmatype, signalmatype }: MultiPeriodAndMaSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    stoch: ({ symbol, interval, fastkperiod, slowkperiod, slowdperiod, slowkmatype, slowdmatype }: any) => Promise<{
        [key: string]: any;
    }>;
    stochf: ({ symbol, interval, fastkperiod, fastdperiod, fastdmatype }: any) => Promise<{
        [key: string]: any;
    }>;
    rsi: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    stochrsi: ({ symbol, interval, time_period, series_type, fastkperiod, fastdperiod, fastdmatype }: any) => Promise<{
        [key: string]: any;
    }>;
    willr: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    adx: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    adxr: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    apo: ({ symbol, interval, series_type, fastperiod, slowperiod, matype }: MultiPeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ppo: ({ symbol, interval, series_type, fastperiod, slowperiod, matype }: MultiPeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    mom: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    bop: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    cci: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    cmo: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    roc: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    rocr: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    aroon: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    aroonosc: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    mfi: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    trix: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ultosc: ({ symbol, interval, timeperiod1, timeperiod2, timeperiod3 }: any) => Promise<{
        [key: string]: any;
    }>;
    dx: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    minus_di: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    plus_di: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    minus_dm: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    plus_dm: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    bbands: ({ symbol, interval, time_period, series_type, nbdevup, nbdevdn, matype }: any) => Promise<{
        [key: string]: any;
    }>;
    midpoint: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    midprice: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    sar: ({ symbol, interval, acceleration, maximum }: any) => Promise<{
        [key: string]: any;
    }>;
    trange: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    atr: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    natr: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ad: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    adosc: ({ symbol, interval, fastperiod, slowperiod }: any) => Promise<{
        [key: string]: any;
    }>;
    obv: ({ symbol, interval, time_period, series_type }: TimePeriodSeriesParameters) => Promise<{
        [key: string]: any;
    }>;
    ht_trendline: ({ symbol, interval, series_type }: any) => Promise<{
        [key: string]: any;
    }>;
    ht_sine: ({ symbol, interval, series_type }: any) => Promise<{
        [key: string]: any;
    }>;
    ht_trendmode: ({ symbol, interval, series_type }: any) => Promise<{
        [key: string]: any;
    }>;
    ht_dcperiod: ({ symbol, interval, series_type }: any) => Promise<{
        [key: string]: any;
    }>;
    ht_dcphase: ({ symbol, interval, series_type }: any) => Promise<{
        [key: string]: any;
    }>;
    ht_dcphasor: ({ symbol, interval, series_type }: any) => Promise<{
        [key: string]: any;
    }>;
}
export default Technicals;
//# sourceMappingURL=technicals.d.ts.map