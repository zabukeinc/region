"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Province extends sequelize_1.Model {
}
exports.Province = Province;
Province.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    provinsi: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    ibukota: {
        type: sequelize_1.DataTypes.STRING(100),
    },
}, {
    tableName: "tbl_provinsi",
    sequelize: database_1.db,
    timestamps: false,
});
Province.sync().then(() => console.log("Table."));
//# sourceMappingURL=province.model.js.map