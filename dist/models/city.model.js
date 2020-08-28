"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class City extends sequelize_1.Model {
}
exports.City = City;
City.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    provinsi_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    kabupaten_kota: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    ibukota: {
        type: sequelize_1.DataTypes.STRING(100),
    },
}, {
    tableName: "tbl_kabkot",
    sequelize: database_1.db,
    timestamps: false,
});
//# sourceMappingURL=city.model.js.map