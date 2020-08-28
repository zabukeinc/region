"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.District = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class District extends sequelize_1.Model {
}
exports.District = District;
District.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    kabkot_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    kecamatan: {
        type: sequelize_1.DataTypes.STRING(100),
    },
}, {
    tableName: "tbl_kecamatan",
    sequelize: database_1.db,
    timestamps: false,
});
//# sourceMappingURL=district.model.js.map