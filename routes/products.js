const express = require('express');
const productServices = require('../services/servicesProducts');
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const products = await productServices.getAllProducts(req, res);
    res.send({products})
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params
      const productOne = await productServices.getOneProduct(id)
      return res.send({productOne})
    }
    catch (error) {
      next(error)
    }
  }
);

router.post('/',async (req, res, next) => {
   try {
    const body = req.body
    console.log(body)
    const createProduct = await productServices.createnewProduct(body);
    return res.send(createProduct)
   } catch (error) {
    next(error)
   }
  }
);

router.patch('/:id', async (req, res,next) => {
    try {
      const {id} = req.params
      const body = req.body
      const updateProduct = await productServices.updateProduct(id, body);
      return res.send({updateProduct});
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id', (req, res, next) => {
  try {
    const {id} = req.params
    const deleteProduct  = productServices.deleteProduct(id);
    return res.send({deleteProduct})
  } catch (error) {
    next(error)
  }
});

module.exports = router;