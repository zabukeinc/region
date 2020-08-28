"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const dbName = "region";
const dbUser = "root";
const dbPass = "";
const dbHost = "localhost";
exports.db = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: "mysql",
});
//# sourceMappingURL=database.js.map