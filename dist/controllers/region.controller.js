"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionController = void 0;
const province_model_1 = require("../models/province.model");
const city_model_1 = require("../models/city.model");
const district_model_1 = require("../models/district.model");
const postalcode_model_1 = require("../models/postalcode.model");
class RegionController {
    showProvince(req, res) {
        province_model_1.Province.findAll({})
            .then((province) => {
            if (province) {
                res.status(200).json({
                    status: true,
                    message: "Get all data province",
                    data: province,
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "Province is empty",
                    data: province,
                });
            }
        })
            .catch((err) => {
            res.status(500).json({
                status: false,
                message: "Can not get data province",
                error: err.message,
            });
        });
    }
    showCity(req, res) {
        const provinceId = parseInt(req.params.id);
        city_model_1.City.findAll({ where: { provinsi_id: provinceId } })
            .then((city) => {
            if (city) {
                res.status(200).json({
                    status: true,
                    message: "Get city by province id",
                    data: city,
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "City not found",
                    data: city,
                });
            }
        })
            .catch((err) => {
            res.status(500).json({
                status: false,
                message: err.message,
            });
        });
    }
    showDistrict(req, res) {
        const cityId = parseInt(req.params.id);
        district_model_1.District.findAll({ where: { kabkot_id: cityId } })
            .then((district) => {
            if (district) {
                res.status(200).json({
                    status: true,
                    message: "Get all district by City ID",
                    data: district,
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "District not found",
                    data: district,
                });
            }
        })
            .catch((err) => {
            res.status(500).json({
                status: false,
                message: err.message,
            });
        });
    }
    showPostalCode(req, res) {
        const districtId = parseInt(req.params.id);
        postalcode_model_1.PostalCode.findAll({ where: { kecamatan_id: districtId } })
            .then((postal_code) => {
            if (postal_code) {
                res.status(200).json({
                    status: true,
                    message: "Get all Postal Code by District ID",
                    data: postal_code,
                });
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "postal_code not found",
                    data: postal_code,
                });
            }
        })
            .catch((err) => {
            res.status(500).json({
                status: false,
                message: err.message,
            });
        });
    }
}
exports.RegionController = RegionController;
//# sourceMappingURL=region.controller.js.map