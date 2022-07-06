/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const post = require("./post");

const bukuController = require("./bukuController")
const kategoriController = require("./kategoriController")
const transaksiController = require("./transaksiController")
const userController = require("./userController")

module.exports = {
  post,
  bukuController,
  kategoriController,
  transaksiController,
  userController
};
