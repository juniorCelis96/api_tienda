const { request } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'api_tienda_db',
    port: '5432'
})
// Products Methods
const getProducts = async (req, res) => {
    const response = await pool.query('SELECT * from products');
    res.status(200).json(response.rows);
}

const getProductById = async (req, res) => {
    const id = req.params.id; 
    const response = await pool.query('select * from products where id = $1', [id]);
    res.json(response.rows);
}

const createProducts = async (req, res) => {
    const {id, name, price, description} = req.body;
    
    const response = await pool.query('INSERT INTO products (id, name, price, description)' +
                                        'VALUES ($1, $2, $3, $4)',
                                        [id, name, price, description]);
    console.log(response)
    res.json({
        message: "Product created succesfully",
        body: {
            product: {id, name, price, description} 
        }
    });
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, price, description } = req.body;

    const response = await pool.query('UPDATE products SET name = $2, price = $3, description = $4' +
                                        'WHERE id = $1',
                                        [id, name, price, description])
    console.log(response)
    res.json('Product: ' + id +' updated succesfully');
    
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    const response = await pool.query('DELETE from products WHERE id = $1',
                                        [id])
    console.log(response)
    res.json('Product: ' + id +' deleted succesfully');
}

// 

module.exports = {
    getProducts,
    getProductById,
    createProducts,
    updateProduct,
    deleteProduct
}