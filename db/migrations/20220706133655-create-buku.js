'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bukus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      gambar: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.INTEGER
      },
      lokasi: {
        type: Sequelize.STRING
      },
      pengarang: {
        type: Sequelize.STRING
      },
      tahun_terbit: {
        type: Sequelize.INTEGER
      },
      kategori_id: {
        type: Sequelize.INTEGER
      },
      diminati: {
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bukus');
  }
};