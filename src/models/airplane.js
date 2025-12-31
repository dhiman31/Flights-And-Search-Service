'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // associations later
    }
  }

  Airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER,
        defaultValue: 200
      }
    },
    {
      sequelize,
      modelName: 'Airplane'
    }
  );

  return Airplane;
};
