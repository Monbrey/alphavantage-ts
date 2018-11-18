declare class Api {
    baseUrl: string;
    constructor(apiKey: string);
    /**
     * Recursively walk the data tree and replace weird keys with a normalized set.
     *
     * @param {Object|String|Number} data
     *   The data to normalize.
     *
     * @returns {Object|String|Number}
     *   Normalized data.
     */
    polish: (data: string | number | {
        [key: string]: string;
    }) => string | number | {
        [key: string]: any;
    };
    /**
     * Util function to build the proper API url.
     *
     * @param {Object} params
     *   The parameter object as type:value pairs.
     *
     * @returns {String}
     *   The API url to use for a given function and input parameters.
     */
    getUrl: (params: {
        [key: string]: string;
    }) => string;
    /**
     * Wrapper function generator for any endpoint.
     *
     * @param {String} fn
     *   The API function type to use
     *
     * @returns {Function}
     *   The callback function to use in the sdk.
     */
    request: (fn: string) => (params: {
        [key: string]: string | number;
    }) => Promise<{
        [key: string]: any;
    }>;
}
export default Api;
//# sourceMappingURL=api.d.ts.map