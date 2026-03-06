const localDb = require("../db/local_db");

function getIndex(req, res) {
    res.render("index", {
        links: localDb.getAllLinks()
    });
};

module.exports = { getIndex };