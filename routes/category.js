const express = require('express');
const servicesCategory = require('../services/servicesCategory')
const router = express.Router()
//const {getClientSchema, createClientSchema, updateClientSchema} = require('../schema/schemaClient')



router.get('/', async(req, res, next)=>{
    try {
        const categories =await servicesCategory.allCategory()
        res.json(categories)
    } catch (error) {
        next(error)
    }
})


router.get('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        const category =await servicesCategory.oneCategory(id)
        res.json(category)
    } catch (error) {
        next(error)
    }
})


router.post('/', async(req, res, next)=>{
    try {
        const body = req.body
        const newCategory = await servicesCategory.createCategory(body)
        res.json(newCategory)
    } catch (error) {
        next(error)
    }
})


router.patch('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        const body = req.body
        const updateCategory = await servicesCategory.updateCategory(id, body)
        res.json(updateCategory)
    } catch (error) {
        next(error)
    }
})


router.delete('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        const deleteCategory = await servicesCategory.updateCategory(id, body)
        res.json(deleteCategory)
    } catch (error) {
        next(error)
    }
})


module.exports= router