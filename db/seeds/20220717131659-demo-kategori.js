'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Kategoris', [
      {
        jenis_buku: "Novel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Biografi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Ensiklopedia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Majalah",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Komik",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Literatur",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Pelajaran",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Catatan Harian",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Horror",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jenis_buku: "Teknologi",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Kategoris', null, {
      truncate: true,
      restartIdentity: true
    });
  }
};
