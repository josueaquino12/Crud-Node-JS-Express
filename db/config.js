const { Sequelize } = require('sequelize');
const {config} =require('../config/config')


const USER = encodeURIComponent(config.dbUser)
const PASSWORD =encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`



module.exports = {
    development: {
        username: 'josu',
        password: 'admin123',
        database: 'my_app',
        url:URI,
        dialect: 'postgres'
    },
    production: {
        username: 'josu',
        password: 'admin123',
        database: 'my_app',
        url: URI,
        dialect: 'postgres'
    }
}