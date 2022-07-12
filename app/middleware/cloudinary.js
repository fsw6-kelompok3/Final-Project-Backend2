const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "aurellieandra",
    api_key: "986524165148345",
    api_secret: "R8XJmHFXfllq_x-iKlibzFd3R48"
})

module.exports = cloudinary;