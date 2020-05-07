import Api from "./api";
declare class Sectors {
    private api;
    constructor(api: Api);
    performance: () => (params: {
        [key: string]: string | number;
    }) => Promise<{
        [key: string]: any;
    }>;
}
export default Sectors;
//# sourceMappingURL=sectors.d.ts.map