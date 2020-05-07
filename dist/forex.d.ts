import Api from "./api";
declare class Forex {
    private api;
    constructor(api: Api);
    rate: (from_currency: string, to_currency: string) => Promise<{
        [key: string]: any;
    }>;
}
export default Forex;
//# sourceMappingURL=forex.d.ts.map