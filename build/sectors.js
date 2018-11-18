var Forex = /** @class */ (function () {
    function Forex(api) {
        this.performance = this.api.request("SECTOR");
        this.api = api;
    }
    return Forex;
}());
export default Forex;
