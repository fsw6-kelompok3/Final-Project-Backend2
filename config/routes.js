const express = require("express");
const controllers = require("../app/controllers");

const multer = require('../middleware/multer')
const authUser = require("../middleware/user")
const authAdmin = require("../middleware/admin")

const appRouter = express.Router();
const apiRouter = express.Router();

/** Mount GET / handler */
appRouter.get("/", controllers.main.index);

/**
 * TODO: Implement your own API
 *       implementations
 * ====
 * BUKU
 * ====
 */
apiRouter.get(
  "/api/v1/buku",
  controllers.api.v1.bukuController.getAllDataBuku
)
apiRouter.post(
  "/api/v1/buku",
  authAdmin,
  multer.single("gambar"),
  controllers.api.v1.bukuController.tambahBuku
)
apiRouter.get(
  "/api/v1/buku/:id",
  controllers.api.v1.bukuController.getDataBukuById
)
apiRouter.put(
  "/api/v1/buku/:id",
  authAdmin,
  multer.single("gambar"),
  controllers.api.v1.bukuController.editDetailBuku
)
apiRouter.delete(
  "/api/v1/buku/:id",
  authAdmin,
  controllers.api.v1.bukuController.deleteBuku
)
apiRouter.get(
  "/api/v1/buku/cari",
  controllers.api.v1.bukuController.searchBuku
)
apiRouter.patch(
  "/api/v1/buku/:id/like",
  controllers.api.v1.bukuController.likeDataBuku
)
apiRouter.patch(
  "/api/v1/buku/:id/unlike",
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
  "/api/v1/kategori",
  authAdmin,
  controllers.api.v1.kategoriController.tambahKategori
)
apiRouter.delete(
  "/api/v1/kategori/:id",
  authAdmin,
  controllers.api.v1.kategoriController.deleteKategori
)

/**
 * TODO: Implement your own API
 *       implementations
 * =========
 * TRANSAKSI --> HALAMAN USER
 * =========
 */
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

/**
 * TODO: Implement your own API
 *       implementations
 * =========
 * TRANSAKSI --> HALAMAN SELLER
 * =========
 */
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
  "/api/v1/user/:id",
  controllers.api.v1.userController.getDataUserById
)
apiRouter.post(
  "/api/v1/user",
  multer.single("foto"),
  controllers.api.v1.userController.addUser
)
apiRouter.put(
  "/api/v1/user/:id",
  multer.single("foto"),
  controllers.api.v1.userController.editDetailUser
)
apiRouter.delete(
  "/api/v1/user/:id",
  authAdmin,
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
