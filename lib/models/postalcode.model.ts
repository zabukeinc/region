import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from "../config/database";

export class PostalCode extends Model {
  public id!: number;
  public kd_pos: number;
}

export interface PostalCodeInterface {
  kd_pos: number;
}

PostalCode.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    kd_pos: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "tbl_kelurahan",
    sequelize: db,
    timestamps: false,
  }
);
