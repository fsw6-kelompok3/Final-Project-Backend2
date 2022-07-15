const express = require("express");
const controllers = require("../app/controllers");

const cors = require('cors')

const multer = require('../app/middleware/multer')
const authUser = require('../app/middleware/user')
const authAdmin = require('../app/middleware/admin')

const appRouter = express.Router();
const apiRouter = express.Router();

appRouter.use(cors({
  'Access-Control-Allow-Origin': 'http://localhost:3000'
}))

/** Mount GET / handler */
appRouter.get("/", controllers.main.index);

/**
 * TODO: Implement your own API
 *       implementations
 * ====
 * BUKU
 * ====
 */

// Seller
apiRouter.get(
  "/seller/buku",
  authAdmin,
  controllers.api.v1.bukuController.getAllDataBukuSeller
)
apiRouter.post(
  "/seller/buku",
  authAdmin,
  multer.array("gambar"),
  controllers.api.v1.bukuController.tambahBuku
)
apiRouter.delete(
  "/seller/buku/:id",
  authAdmin,
  controllers.api.v1.bukuController.deleteBuku
)
apiRouter.get(
  "/seller/terjual",
  authAdmin,
  controllers.api.v1.bukuController.filterTerjual
)
apiRouter.get(
  "/seller/diminati",
  authAdmin,
  controllers.api.v1.bukuController.filterDiminati
)
apiRouter.post(
  "/seller/buku/:id",
  authAdmin,
  multer.array("gambar"),
  controllers.api.v1.bukuController.editDetailBuku
)

// User
apiRouter.get(
  "/user/buku",
  controllers.api.v1.bukuController.getAllDataBuku
)
apiRouter.get(
  "/user/buku/:id",
  controllers.api.v1.bukuController.getDataBukuById
)
apiRouter.get(
  "/cari",
  controllers.api.v1.bukuController.searchBuku
)

apiRouter.patch(
  "/api/v1/buku/:id/like",
  authUser,
  controllers.api.v1.bukuController.likeDataBuku
)
apiRouter.patch(
  "/api/v1/buku/:id/unlike",
  authUser,
  controllers.api.v1.bukuController.unlikeDataBuku
)

/**
 * TODO: Implement your own API
 *       implementations
 * ========
 * KATEGORI
 * ========
 */
apiRouter.post(
  "/v1/kategori",
  authAdmin,
  controllers.api.v1.kategoriController.tambahKategori
)
apiRouter.delete(
  "/v1/kategori/:id",
  authAdmin,
  controllers.api.v1.kategoriController.deleteKategori
)

/**
 * TODO: Implement your own API
 *       implementations
 * =========
 * TRANSAKSI
 * =========
 */

// Halaman User
apiRouter.post(
  "/",
  authUser,
  controllers.api.v1.transaksiController.tambahTransaksi
)
apiRouter.get(
  "/",
  authUser,
  controllers.api.v1.transaksiController.getdataByUserId
)
apiRouter.get(
  "/detail/:id",
  authUser,
  controllers.api.v1.transaksiController.DetailTransaksiUserId
)

// Halaman Seller
apiRouter.get(
  "/seller",
  authAdmin,
  controllers.api.v1.transaksiController.getdataBySellerId
)
apiRouter.get(
  "/seller/detail/:id",
  authAdmin,
  controllers.api.v1.transaksiController.DetailTransaksiHalamanSeller
)
apiRouter.put(
  "/seller/:id",
  authAdmin,
  controllers.api.v1.transaksiController.updateTransaksiBerhasil
)
apiRouter.put(
  "/seller/:id/batal",
  authAdmin,
  controllers.api.v1.transaksiController.updateTransaksiBatal
)

/**
 * TODO: Implement your own API
 *       implementations
 * ====
 * USER
 * ====
 */
apiRouter.post(
  "/register/user",
  controllers.api.v1.userController.addUser
)
apiRouter.post(
  "/register/admin",
  controllers.api.v1.userController.addAdmin
)

apiRouter.post(
  "/login",
  controllers.api.v1.userController.login
)

apiRouter.get(
  "/v1/admin",
  authAdmin,
  controllers.api.v1.userController.getDataUserById
)
apiRouter.get(
  "/v1/user",
  authUser,
  controllers.api.v1.userController.getDataUserById
)

apiRouter.put(
  "/v1/admin",
  authAdmin,
  multer.single("foto"),
  controllers.api.v1.userController.editDetailUser
)
apiRouter.put(
  "/v1/user",
  authUser,
  multer.single("foto"),
  controllers.api.v1.userController.editDetailUser
)

apiRouter.delete(
  "/v1/admin/:id",
  authAdmin,
  controllers.api.v1.userController.deleteUser
)
apiRouter.delete(
  "/v1/user/:id",
  authUser,
  controllers.api.v1.userController.deleteUser
)

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
appRouter.get("/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

appRouter.use(apiRouter);

/** Mount Not Found Handler */
appRouter.use(controllers.main.onLost);

/** Mount Exception Handler */
appRouter.use(controllers.main.onError);

module.exports = appRouter;