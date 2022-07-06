'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    foto: DataTypes.STRING,
    nama: DataTypes.STRING,
    kota: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nohp: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (record, options) => {
        record.password = bcrypt.hashSync(record.password, 10)
      },
      afterCreate: (record) => {
        console.log(record);
      }
    },
    sequelize,
    modelName: 'User',
  });
  User.associate = function (models) {
    User.belongsTo(models.transaksi, {
      foreignKey: 'id',
    });
  };
  return User;
};