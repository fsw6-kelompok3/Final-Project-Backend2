'use strict';
var bcrypt = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'magdalisa@gmail.com',
        password: await bcrypt.hash('magdalisa123', 10),
        foto: 'https://res.cloudinary.com/aurellieandra/image/upload/v1657692476/second_hand/sh_seeds/girl-profilepic_cik3wi.webp',
        nama: 'Anniel Miftasya',
        kota: 'Malang',
        alamat: 'Jl. Anggur No. 1',
        nohp: '08123456789',
        level: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'diandra@gmail.com',
        password: await bcrypt.hash('diandra123', 10),
        foto: 'https://res.cloudinary.com/aurellieandra/image/upload/v1657692476/second_hand/sh_seeds/girl-profilepic_cik3wi.webp',
        nama: 'Diandra Azra',
        kota: 'Jakarta',
        alamat: 'Jl. Apel No. 1',
        nohp: '08123456789',
        level: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'diyah@gmail.com',
        password: await bcrypt.hash('diyah123', 10),
        foto: 'https://res.cloudinary.com/aurellieandra/image/upload/v1657692476/second_hand/sh_seeds/girl-profilepic_cik3wi.webp',
        nama: 'Diyah Ayu Fitriana',
        kota: 'Semarang',
        alamat: 'Jl. Melon No. 1',
        nohp: '08123456789',
        level: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'malay@gmail.com',
        password: await bcrypt.hash('malay123', 10),
        foto: 'https://res.cloudinary.com/aurellieandra/image/upload/v1657692477/second_hand/sh_seeds/boy-profilepic_htqgvs.webp',
        nama: 'Muhammad Malay',
        kota: 'Bali',
        alamat: 'Jl. Pepaya No. 1',
        nohp: '08987654321',
        level: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'fadil@gmail.com',
        password: await bcrypt.hash('fadil123', 10),
        foto: 'https://res.cloudinary.com/aurellieandra/image/upload/v1657692477/second_hand/sh_seeds/boy-profilepic_htqgvs.webp',
        nama: 'Muhammad Fadillah',
        kota: 'Kediri',
        alamat: 'Jl. Semangka No. 1',
        nohp: '08987654321',
        level: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: 'elin@gmail.com',
        password: await bcrypt.hash('elin123', 10),
        foto: 'https://res.cloudinary.com/aurellieandra/image/upload/v1657692476/second_hand/sh_seeds/girl-profilepic_cik3wi.webp',
        nama: 'Elin Febriani',
        kota: 'Surabaya',
        alamat: 'Jl. Stroberi No. 1',
        nohp: '08123456789',
        level: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
      truncate: true,
      restartIdentity: true
    });
  }
};
