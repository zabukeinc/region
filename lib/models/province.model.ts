import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

export class Province extends Model {
  public id!: number;
  public provinsi: string;
  public ibukota: string;
}

export interface ProvinceInterface {
  provinsi: string;
  ibukota: string;
}

Province.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    provinsi: {
      type: DataTypes.STRING(100),
    },
    ibukota: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "tbl_provinsi",
    sequelize: db,
    timestamps: false,
  }
);
Province.sync().then(() => console.log("Table."));
