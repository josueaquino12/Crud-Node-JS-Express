const {Pool} = require('pg')
const {config} =require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD =encodeURIComponent(config.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool ({
    
    connectionString: URI

     /*   host: 'localhost',
        port: 5433,
        user: 'josu',
        password: 'admin1234',
        database: 'my_api'*/

    }) 

    
module.exports = pool;