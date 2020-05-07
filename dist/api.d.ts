declare class Api {
    private baseUrl;
    constructor(apiKey: string);
    setApiKey(apiKey: string): void;
    polish: (data: string | number | {
        [key: string]: string;
    }) => string | number | {
        [key: string]: any;
    };
    getUrl: (params: {
        [key: string]: string;
    }) => string;
    request: (fn: string) => (params: {
        [key: string]: string | number;
    }) => Promise<{
        [key: string]: any;
    }>;
}
export default Api;
//# sourceMappingURL=api.d.ts.map