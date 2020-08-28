"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCode = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class PostalCode extends sequelize_1.Model {
}
exports.PostalCode = PostalCode;
PostalCode.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    kd_pos: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: "tbl_kelurahan",
    sequelize: database_1.db,
    timestamps: false,
});
//# sourceMappingURL=postalcode.model.js.map