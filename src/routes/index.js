const { Router, application } = require('express');
const router = Router();

// Products Routes
const { getProducts,
        createProducts,
        getProductById,
        updateProduct,
        deleteProduct} = require('../controllers/index.controller.products'); 

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.put('/products/:id', updateProduct);
router.delete('/products', deleteProduct);

// Users routes
const { getUsers,
        createUser,
        getUserById,
        updateUser,
        deleteUser} = require('../controllers/index.controller.users'); 

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users', deleteUser);

module.exports = router; 