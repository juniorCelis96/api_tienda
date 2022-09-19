const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'api_tienda_db',
    port: '5432'
});


module.exports = pool;