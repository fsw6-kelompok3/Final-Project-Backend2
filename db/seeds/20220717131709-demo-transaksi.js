'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transaksis', [
      {
        id_barang: 1,
        id_user: 4,
        persetujuan_harga: 55000,
        harga_tawar: 55000,
        status_penjualan: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_barang: 2,
        id_user: 4,
        persetujuan_harga: 0,
        harga_tawar: 79000,
        status_penjualan: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_barang: 3,
        id_user: 4,
        persetujuan_harga: 75000,
        harga_tawar: 75000,
        status_penjualan: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_barang: 1,
        id_user: 5,
        persetujuan_harga: 0,
        harga_tawar: 45000,
        status_penjualan: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_barang: 4,
        id_user: 5,
        persetujuan_harga: 100000,
        harga_tawar: 100000,
        status_penjualan: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_barang: 8,
        id_user: 5,
        persetujuan_harga: 32000,
        harga_tawar: 32000,
        status_penjualan: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_barang: 9,
        id_user: 5,
        persetujuan_harga: 0,
        harga_tawar: 30000,
        status_penjualan: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transaksis', null, {
      truncate: true,
      restartIdentity: true
    });
  }
};
