const { User } = require('../../../models')
const { Op } = require('sequelize')
var bcrypt = require('bcrypt');
const jwt = require('../../../helper/jwt')

module.exports = class {
    // add user
    static async addUser(req, res, next) {
        try {
            const user = await User.create({
                nama: req.body.nama,
                password: req.body.password,
                email: req.body.email,
                level: "user"
            })
            res.status(200).send({
                status: 200,
                message: 'Data User Ditambahkan!',
                data: user
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    // add admin
    static async addAdmin(req, res, next) {
        try {
            const user = await User.create({
                nama: req.body.nama,
                password: req.body.password,
                email: req.body.email,
                level: "admin",
            })
            res.status(200).send({
                status: 200,
                message: 'Data Admin Ditambahkan!',
                data: user
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    // login
    static async login(req, res, next) {
        try {
            const user = await User.findOne({ where: { email: req.body.email } })
            if (!user) {
                res.status(404).send({
                    status: 404,
                    message: 'User not found!',
                })
            }

            const isValidPassword = await bcrypt.compare(req.body.password, user.password)

            if (!isValidPassword) {
                res.status(404).send({
                    status: 400,
                    message: 'Email and password not match!',
                })
            }
            const token = jwt.generateToken({ email: user.email, password: user.password })
            const secureUser = user.dataValues
            delete secureUser.password

            res.status(200).send({
                status: 200,
                message: 'User found!',
                data: {
                    user: secureUser,
                    token: token
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }

    // get all user
    static getAllUser(req, res, next) {
        User.findAll({
            where: { ...req.query },
        })
            .then((result) => {
                res.status(200).send({
                    status: 201,
                    data: result,
                })
            })
            .catch((result) => {
                res.status(400).send(err)
            })
    }

    // get data user by id
    static async getDataUserById(req, res, next) {
        try {
            const id = req.params.id
            const user = await User.findByPk(id)
            res.status(201).send(user)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // edit detail user
    static async editDetailUser(req, res, next) {
        try {
            const url = `/uploads/${req.file.filename}`

            const {
                foto,
                nama,
                kota,
                alamat,
                nohp
            } = req.body
            const user = await User.update({
                foto: url,
                nama,
                kota,
                alamat,
                nohp
            }, { where: { id: req.params.id } })
            res.status(201).send(user)
        } catch (err) {
            res.status(422).json({
                error: {
                    name: err.name,
                    message: err.message
                }
            })
        }
    }

    // delete user
    static async deleteUser(req, res, next) {
        try {
            await User.destroy({
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