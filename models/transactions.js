'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Accounts, {
        foreignKey: 'account_ori'
      })
      this.belongsTo(models.transactions_types, {
        foreignKey: 'transaction_type'
      })
    }
  };
  transactions.init({
    account_ori: DataTypes.INTEGER,
    account_des: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    transaction_type: DataTypes.INTEGER,
    trans_date: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    modelName: 'transactions',
  });
  return transactions;
};