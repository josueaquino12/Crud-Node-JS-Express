/*const productRouter = require('../routes/products')*/
const usersRouter = require('../routes/users')
const productRouter = require('../routes/products')
const express = require('express')
const clientRouter = require('../routes/client')
const categoryRouter = require('../routes/category')


function apiRouter (app){
    const router = express.Router()
 
   
    router.use('/users', usersRouter)
    router.use('/products', productRouter)
    router.use('/clients', clientRouter)
     router.use('/category', categoryRouter)
    
    app.use('/api/v1', router)
}

module.exports = apiRouter