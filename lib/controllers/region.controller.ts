import { Request, Response } from "express";
import { Province, ProvinceInterface } from "../models/province.model";
import { City, CityInterface } from "../models/city.model";
import { District, DistrictInterface } from "../models/district.model";
import { PostalCode, PostalCodeInterface } from "../models/postalcode.model";

export class RegionController {
  public showProvince(req: Request, res: Response) {
    Province.findAll<Province>({})
      .then((province: Array<Province>) => {
        if (province) {
          res.status(200).json({
            status: true,
            message: "Get all data province",
            data: province,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "Province is empty",
            data: province,
          });
        }
      })
      .catch((err: Error) => {
        res.status(500).json({
          status: false,
          message: "Can not get data province",
          error: err.message,
        });
      });
  }

  public showCity(req: Request, res: Response) {
    const provinceId: number = parseInt(req.params.id);
    City.findAll<City>({ where: { provinsi_id: provinceId } })
      .then((city: Array<City>) => {
        if (city) {
          res.status(200).json({
            status: true,
            message: "Get city by province id",
            data: city,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "City not found",
            data: city,
          });
        }
      })
      .catch((err: Error) => {
        res.status(500).json({
          status: false,
          message: err.message,
        });
      });
  }

  public showDistrict(req: Request, res: Response) {
    const cityId: number = parseInt(req.params.id);
    District.findAll<District>({ where: { kabkot_id: cityId } })
      .then((district: Array<District>) => {
        if (district) {
          res.status(200).json({
            status: true,
            message: "Get all district by City ID",
            data: district,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "District not found",
            data: district,
          });
        }
      })
      .catch((err: Error) => {
        res.status(500).json({
          status: false,
          message: err.message,
        });
      });
  }

  public showPostalCode(req: Request, res: Response) {
    const districtId: number = parseInt(req.params.id);
    PostalCode.findAll<PostalCode>({ where: { kecamatan_id: districtId } })
      .then((postal_code: Array<PostalCode>) => {
        if (postal_code) {
          res.status(200).json({
            status: true,
            message: "Get all Postal Code by District ID",
            data: postal_code,
          });
        } else {
          res.status(404).json({
            status: false,
            message: "postal_code not found",
            data: postal_code,
          });
        }
      })
      .catch((err: Error) => {
        res.status(500).json({
          status: false,
          message: err.message,
        });
      });
  }
}
