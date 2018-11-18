import Api from "./api";
declare class Forex {
    api: Api;
    constructor(api: Api);
    performance: (params: {
        [key: string]: string | number;
    }) => Promise<{
        [key: string]: any;
    }>;
}
export default Forex;
//# sourceMappingURL=sectors.d.ts.map