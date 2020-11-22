require('dotenv').config()

const secret = {
    JWT_SECRET: process.env.JWT_KEY
}

module.exports = secret;