import Api from "./api";
export declare type OutputSize = "compact" | "full";
export declare type DataType = "json" | "csv";
export declare type TimeInterval = "1min" | "5min" | "15min" | "30min" | "60min";
declare class Stocks {
    private api;
    constructor(api: Api);
    intraday: (symbol: string, { interval, outputsize, datatype }: {
        interval: TimeInterval;
        outputsize?: "compact" | "full" | undefined;
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    private dailySeries;
    daily: (symbol: string, { outputsize, datatype }: {
        outputsize?: "compact" | "full" | undefined;
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    daily_adjusted: (symbol: string, { outputsize, datatype }: {
        outputsize?: "compact" | "full" | undefined;
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    private series;
    weekly: (symbol: string, { datatype }: {
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    weekly_adjusted: (symbol: string, { datatype }: {
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    monthly: (symbol: string, { datatype }: {
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    monthly_adjusted: (symbol: string, { datatype }: {
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    quote: (symbol: string, { datatype }: {
        datatype?: "json" | "csv" | undefined;
    }) => Promise<{
        [key: string]: any;
    }>;
    batch: (symbols: string | string[]) => Promise<{
        [key: string]: any;
    }>;
    search: (keywords: string) => Promise<{
        [key: string]: any;
    }>;
}
export default Stocks;
//# sourceMappingURL=stocks.d.ts.map