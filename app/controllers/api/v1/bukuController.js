const { Buku } = require('../../../models')
const { Op } = require('sequelize')

module.exports = class {
    // get all data buku 
    static async getAllDataBuku(req, res, next) {
        try {
            const page = req.query.page || 1
            const limit = req.query.pageSize || 2

            const buku = await Buku.findAll({
                limit,
                offset: (page - 1) * limit
            })
            const bukuCount = await Buku.count();

            res.status(201).json({
                data: buku,
                total_data: bukuCount,
                pageSize: limit,
                currentPage: page
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
            const url = `/uploads/${req.file.filename}`

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

            const buku = await Buku.create({
                nama,
                deskripsi,
                gambar: url,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id,
                diminati: null,
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
            const buku = await Buku.findByPk(id)
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
            const url = `/uploads/${req.file.filename}`

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
            const buku = await Buku.update({
                nama,
                deskripsi,
                gambar: url,
                harga,
                lokasi,
                pengarang,
                tahun_terbit,
                kategori_id
            }, { where: { id: req.params.id } })
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

    // delete data buku
    static async deleteBuku(req, res, next) {
        try {
            await Buku.destroy({
                where: { id: req.params.id }
            })
            res.status(204).end()
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
            const page = req.query.page || 1
            const limit = req.query.pageSize || 2

            const buku = await Buku.findAll({
                limit,
                offset: (page - 1) * limit,
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
                pageSize: limit,
                currentPage: page
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
            const like = await Buku.update({
                diminati: (buku.diminati - 1)
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
}