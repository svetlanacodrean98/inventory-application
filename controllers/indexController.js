const db = require("../db");

function getIndex(req, res) {
    res.render("index", {
        links: db.getAllLinks()
    });
};

module.exports = { getIndex };