const { Buku, transaksi, User, Kategori } = require('../../../models')
const { Op } = require('sequelize')
const cloudinary = require('../../../middleware/cloudinary')

module.exports = class {
    // get all data buku by Seller Id
    static async getAllDataBukuSeller(req, res, next) {
        try {
            // const page = req.query.page || 1
            // const limit = req.query.pageSize || 8

            const buku = await User.findAll({
                where: { id: req.userlogin.id },

                include: [{
                    model: Buku,
                    as: 'buku',
                    // limit,
                    // offset: (page - 1) * limit,
                }],
            })
            const bukuCount = await Buku.count();

            res.status(201).json({
                data: buku,
                total_data: bukuCount,
                // pageSize: limit,
                //currentPage: page
            })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    //get all data buku for user
    static async getAllDataBuku(req, res, next) {
        try {
            // const page = req.query.page || 1
            // const limit = req.query.pageSize || 8

            const buku = await Buku.findAll({
                // limit,
                // offset: (page - 1) * limit,
            })
            const bukuCount = await Buku.count();

            res.status(201).json({
                data: buku,
                total_data: bukuCount,
                // pageSize: limit,
                // currentPage: page
            })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }
    // tambah data buku
    static async tambahBuku(req, res, next) {
        try {
            // const url = `/uploads/${req.file.filename}`

            const {
                nama,
                deskripsi,
                gambar,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id
            } = req.body

            const files = req.files
            const urls = []

            for (const f of files) {
                // console.log(f)
                const imageUpload = await cloudinary.uploader.upload(
                    f.path,
                    {
                        upload_preset: "second_hand"
                    }
                )
                const newPath = imageUpload.secure_url
                urls.push(newPath)
            }

            const buku = await Buku.create({
                nama,
                deskripsi,
                gambar: urls,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id,
                diminati: 0,
                seller_id: req.userlogin.id
            })

            res.status(201).json(buku)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // get data buku by id
    static async getDataBukuById(req, res, next) {
        try {
            const id = req.params.id
            const buku = await Buku.findAll({
                where: { id: id },
                include: [{
                    model: User,
                    as: 'penjual_barang',
                }],
            })
            res.status(201).send(buku)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    //get data buku by id seller
    static async getDataBukuByIdSeller(req, res, next) {
        try {
            const id = req.params.id
            const buku = await Buku.findAll({
                where: { id: id },
                include: [{
                    model: User,
                    as: 'penjual_barang',
                }],
            })
            res.status(201).send(buku)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // edit detail buku
    static async editDetailBuku(req, res, next) {
        try {
            // const url = `/uploads/${req.file.filename}`

            const {
                nama,
                deskripsi,
                gambar,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id
            } = req.body

            const files = req.files
            const urls = []

            for (const f of files) {
                // console.log(f)
                const imageUpload = await cloudinary.uploader.upload(
                    f.path,
                    {
                        upload_preset: "second_hand"
                    }
                )
                const newPath = imageUpload.secure_url
                urls.push(newPath)
            }

            const buku = await Buku.update({
                nama,
                deskripsi,
                gambar: urls,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id
            }, { where: { id: req.params.id } })
            res.status(201).json({ status: buku, informasi: req.body, foto: urls })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // delete data buku
    static async deleteBuku(req, res, next) {
        try {
            await Buku.destroy({
                where: { id: req.params.id }
            })
            res.status(201).json({ msg: "Data buku berhasil dihapus!" })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // search data buku
    static async searchBuku(req, res, next) {
        try {
            // const page = req.query.page || 1
            // const limit = req.query.pageSize || 8

            const buku = await Buku.findAll({
                // limit,
                // offset: (page - 1) * limit,
                where: {
                    nama: {
                        [Op.iRegexp]: req.query.nama
                    }
                }
            })
            const bukuCount = await Buku.count();

            res.status(201).json({
                data: buku,
                total_data: bukuCount,
                // pageSize: limit,
                // currentPage: page
            })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // fitur like data buku
    static async likeDataBuku(req, res, next) {
        try {
            const id = req.params.id
            const buku = await Buku.findByPk(id)
            const like = await Buku.update({
                diminati: (buku.diminati + 1)
            }, { where: { id } })
            res.status(201).send(like)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // fitur unlike data buku
    static async unlikeDataBuku(req, res, next) {
        try {
            const id = req.params.id
            const buku = await Buku.findByPk(id)
            const unlike = await Buku.update({
                diminati: (buku.diminati - 1)
            }, { where: { id } })
            res.status(201).send(unlike)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // filter data buku diminati
    static async filterDiminati(req, res, next) {
        try {
            // const page = req.query.page || 1
            // const limit = req.query.pageSize || 8

            const buku = await User.findAll({
                where: { id: req.userlogin.id },
                include: [{
                    model: Buku,
                    as: 'buku',
                    order: [
                        ['diminati', 'DESC'],
                    ],
                    // limit,
                    // offset: (page - 1) * limit,
                }],
            })
            const bukuCount = await Buku.count();

            res.status(201).json({
                data: buku,
                total_data: bukuCount,
                // pageSize: limit,
                // currentPage: page

            })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }

    }

    // filter data buku terjual
    static async filterTerjual(req, res, next) {
        try {
            //const page = req.query.page || 1
            //const limit = req.query.pageSize || 2

            const buku = await User.findAll({
                where: { id: req.userlogin.id },
                include: [{
                    model: Buku,
                    as: 'buku',
                    order: [
                        ['diminati', 'DESC'],
                    ],
                    //limit,
                    // offset: (page - 1) * limit,
                    include: [{
                        model: transaksi,
                        where: { status_penjualan: true },
                        as: 'transaksi_user',
                    }],
                }],

            })
            const bukuCount = await Buku.count();

            res.status(201).json({
                data: buku,
                total_data: bukuCount,
                // pageSize: limit,
                // currentPage: page

            })
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // get buku by kategori
    static async GetBukubyKategori(req, res, next) {
        try {
            const hasil = await Buku.findAll({
                include: [{
                    model: Kategori,
                    where: { jenis_buku: req.body.jenis_buku },
                    as: 'kategori',
                }],
            })
            res.status(200).send({
                status: 200,
                message: 'Berhasil',
                data: hasil
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
}