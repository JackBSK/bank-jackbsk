'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountTypes extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Accounts, {
        foreignKey: 'type'
      });
    }
  };
  AccountTypes.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    //Agregamos esat instruccion para avitar que no lea bien los datos sin el _
    underscored: true,
    modelName: 'AccountTypes',
    tableName: "account_types"
  });
  return AccountTypes;
};