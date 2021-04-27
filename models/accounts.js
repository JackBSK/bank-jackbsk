'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      });
      this.belongsTo(models.AccountTypes, {
        foreignKey: 'type'
      });
    }
  };
  Accounts.init({
    account_no: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Accounts',
    tableName: "accounts"
  });
  return Accounts;
};