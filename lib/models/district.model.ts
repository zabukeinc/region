import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

export class District extends Model {
  public id!: number;
  public kabkot_id: number;
  public kecamatan: string;
}

export interface DistrictInterface {
  kabkot_id: number;
  kecamatan: string;
}

District.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    kabkot_id: {
      type: DataTypes.INTEGER,
    },
    kecamatan: {
      type: DataTypes.STRING(100),
    },
  },
  {
    tableName: "tbl_kecamatan",
    sequelize: db,
    timestamps: false,
  }
);
