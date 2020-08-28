import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

export class City extends Model {
  public id!: number;
  public provinsi_id: number;
  public kabupaten_kota: string;
  public ibukota: string;
}

export interface CityInterface {
  provinsi_id: number;
  kabupaten_kota: string;
  ibukota: string;
}

City.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    provinsi_id: {
      type: DataTypes.INTEGER,
    },
    kabupaten_kota: {
      type: DataTypes.STRING(100),
    },
    ibukota: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "tbl_kabkot",
    sequelize: db,
    timestamps: false,
  }
);
