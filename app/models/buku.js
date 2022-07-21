'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buku.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    gambar: DataTypes.ARRAY(DataTypes.STRING),
    harga: DataTypes.INTEGER,
    lokasi: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER,
    kategori_id: DataTypes.INTEGER,
    diminati: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buku',
  });
  Buku.associate = function (models) {
    Buku.belongsTo(models.Kategori, {
      sourceKey: 'KategoriId',
      foreignKey: 'kategori_id',
      as: 'kategori'
    });
    Buku.hasMany(models.transaksi, {
      foreignKey: 'id_barang',
      as: 'transaksi_user'
    });
    Buku.belongsTo(models.User, {
      foreignKey: 'seller_id',
      as: 'penjual_barang'
    });
  }
  return Buku;
};