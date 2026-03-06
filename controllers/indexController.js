const database = require("../database");

function getIndex(req, res) {
    res.render("index", {
        links: database.getAllLinks()
    });
};

module.exports = { getIndex };