require('dotenv').config();
const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: process.env.USERNAME,
    database: "my_shop",
    password: process.env.PASSWORD,
    port: 5432
});