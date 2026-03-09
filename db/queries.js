const pool = require("./pool");

async function getAllDrinks() {
    const { rows } = await pool.query("select * from drinks order by id asc");
    return rows;
}

async function insertDrink(name) {
    await pool.query("insert into drinks (name) values ($1)", [name]);
}

async function getDrinkById(id) {
    const { rows } = await pool.query("select * from drinks where id = $1", [id]);
    return rows[0];
}

async function updateDrink(id, name) {
    await pool.query("update drinks set name = $1 where id = $2", [name, id]);
}

async function deleteDrink(id) {
    await pool.query("delete from drinks where id = $1", [id]);
}

async function getAllSnacks() {
    const { rows } = await pool.query("select * from snacks order by id asc");
    return rows;
}

async function insertSnack(name) {
    await pool.query("insert into snacks (name) values ($1)", [name]);
}

async function getSnackById(id) {
    const { rows } = await pool.query("select * from snacks where id = $1", [id]);
    return rows[0];
}

async function updateSnack(id, name) {
    await pool.query("update snacks set name = $1 where id = $2", [name, id]);
}

async function deleteSnack(id) {
    await pool.query("delete from snacks where id = $1", [id]);
}

async function insertUser(username, password) {
    await pool.query("insert into users (username, password) values ($1, $2)", [username, password]);
}

async function getUserbyUsername(username) {
    const { rows } = await pool.query("select * from users where username = $1", [username]);
    return rows[0];
}

async function getUserById(id) {
    const { rows } = await pool.query("select * from users where id = $1", [id]);
    return rows[0];
}

module.exports = {
    getAllDrinks,
    insertDrink,
    updateDrink,
    getDrinkById,
    deleteDrink,
    getAllSnacks,
    insertSnack,
    updateSnack,
    getSnackById,
    deleteSnack,
    insertUser,
    getUserbyUsername,
    getUserById
}