'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaksi.init({
    id_barang: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    persetujuan_harga: DataTypes.INTEGER,
    harga_tawar: DataTypes.INTEGER,
    status_penjualan: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  transaksi.associate = function (models) {
    transaksi.belongsTo(models.Buku, {
      foreignKey: 'id_barang',
    });
    transaksi.hasMany(models.User, {
      foreignKey: 'id',
      as: 'detail_user'
    });
  };
  return transaksi;
};