const { transaksi, Buku, User } = require('../../../models')

module.exports = class {
    // post transaksi
    static async tambahTransaksi(req, res, next) {
        try {
            const hasil = await transaksi.create({
                id_barang: req.body.id_barang,
                id_user: req.userlogin.id,
                pesetujuan_harga: 0,
                harga_tawar: req.body.harga_tawar,
            })
            res.status(200).send({
                status: 200,
                message: 'Data transaksi berhasil ditambah!',
                data: hasil
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


    static async getdataByUserId(req, res, next) {
        try {
            const hasil = await Buku.findAll({
                include: [{
                    model: transaksi,
                    where: { id_user: req.userlogin.id },
                    as: 'transaksi_user'
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

    static async getdataBySellerId(req, res, next) {
        try {
            const hasil = await transaksi.findAll({
                where: { status_penjualan: null },
                subQuery: true,
                order: [
                    ['id', 'DESC'],
                ],
                include: [{
                    model: Buku,
                    where: { seller_id: req.userlogin.id },
                    as: 'nama_buku',

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

    static async DetailTransaksiUserId(req, res, next) {
        try {
            const hasil = await transaksi.findOne({
                where: { id: req.params.id, id_user: req.userlogin.id }
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

    static async DetailTransaksiHalamanSeller(req, res, next) {
        try {
            const hasil = await Buku.findAll({
                where: { seller_id: req.userlogin.id },
                include: [{
                    model: transaksi,
                    where: { id: req.params.id },
                    as: 'transaksi_user',
                    include: [
                        {
                            model: User,
                            as: 'detail_user',
                        },
                    ],

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

    static async updateTransaksiBerhasil(req, res, next) {
        try {
            const data = await transaksi.findOne({
                where: { id: req.params.id }
            })

            const hasil = await transaksi.update(
                {
                    status_penjualan: true,
                    pesetujuan_harga: data.harga_tawar
                }, { where: { id: req.params.id } })

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

    static async updateTransaksiBatal(req, res, next) {
        try {
            const hasil = await transaksi.update(
                {
                    status_penjualan: false
                }, { where: { id: req.params.id } })
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