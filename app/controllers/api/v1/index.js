/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const bukuController = require("./bukuController")
const kategoriController = require("./kategoriController")
const transaksiController = require("./transaksiController")
const userController = require("./userController")

module.exports = {
  bukuController,
  kategoriController,
  transaksiController,
  userController
};
