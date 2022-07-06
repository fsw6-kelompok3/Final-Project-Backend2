'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kategori.init({
    jenis_buku: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kategori',
  });
  Kategori.associate = function (models) {
    Kategori.hasMany(models.Buku, { foreignKey: 'kategori_id' })
  }
  return Kategori;
};