import { Request, Response } from "express";
import { RegionController } from "../controllers/region.controller";

export class Routes {
  public regionController: RegionController = new RegionController();

  public routes(app): void {
    app.route("/api/provinsi").get(this.regionController.showProvince);
    app.route("/api/kota/:id").get(this.regionController.showCity);
    app.route("/api/kecamatan/:id").get(this.regionController.showDistrict);
    app.route("/api/kelurahan/:id").get(this.regionController.showPostalCode);
  }
}
