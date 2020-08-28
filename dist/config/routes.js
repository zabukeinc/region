"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const region_controller_1 = require("../controllers/region.controller");
class Routes {
    constructor() {
        this.regionController = new region_controller_1.RegionController();
    }
    routes(app) {
        app.route("/api/provinsi").get(this.regionController.showProvince);
        app.route("/api/kota/:id").get(this.regionController.showCity);
        app.route("/api/kecamatan/:id").get(this.regionController.showDistrict);
        app.route("/api/kelurahan/:id").get(this.regionController.showPostalCode);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map