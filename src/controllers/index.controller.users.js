const  pool = require('../../database/database');

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * from users');
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) => {
    const id = req.params.id; 
    const response = await pool.query('select * from users where id = $1', [id]);
    res.json(response.rows);
}

const createUser = async (req, res) => {
    const {id, document, last_name, name, roles_id} = req.body;
    
    const response = await pool.query('INSERT INTO users(id, document, last_name, name, roles_id)' +
                                        'VALUES ($1, $2, $3, $4, $5)',
                                        [id, document, last_name, name, roles_id]);
    res.json("User created succesfully");
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {  document, last_name, name, roles_id } = req.body;
    const response = await pool.query('UPDATE users SET document = $1, last_name = $2, name = $3, roles_id = $4' +
                                        'WHERE id = $5',
                                        [document, last_name, name, roles_id, id])
    res.json('User: ' + id +' updated succesfully');
    
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE from users WHERE id = $1',
                                        [id])
    res.json('User: ' + id +' deleted succesfully');
}

// Exports
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}