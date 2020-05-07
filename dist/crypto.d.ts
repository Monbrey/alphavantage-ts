import Api from "./api";
declare class Crypto {
    private api;
    constructor(api: Api);
    private series;
    intraday: (symbol: string, market: string) => Promise<{
        [key: string]: any;
    }>;
    daily: (symbol: string, market: string) => Promise<{
        [key: string]: any;
    }>;
    weekly: (symbol: string, market: string) => Promise<{
        [key: string]: any;
    }>;
    monthly: (symbol: string, market: string) => Promise<{
        [key: string]: any;
    }>;
}
export default Crypto;
//# sourceMappingURL=crypto.d.ts.map