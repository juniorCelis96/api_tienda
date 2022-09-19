const { Router, application } = require('express');
const router = Router();

// Products Routes
const { getProducts, createProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/index.controller'); 

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.put('/products/:id', updateProduct);
router.delete('/products', deleteProduct);

module.exports = router; 