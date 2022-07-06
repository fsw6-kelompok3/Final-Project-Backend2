const { Kategori } = require('../../../models')

module.exports = class {
    // tambah data kategori
    static async tambahKategori(req, res, next) {
        try {
            const kategori = await Kategori.create({
                jenis_buku: req.body.jenis_buku
            })
            res.status(201).json(kategori)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // delete data kategori
    static async deleteKategori(req, res, next) {
        try {
            await Kategori.destroy({
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
}