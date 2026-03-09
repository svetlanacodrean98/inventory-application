const localDb = require("../db/local_db");
const db = require("../db/queries");
const bcrypt = require("bcryptjs");

function getIndex(req, res) {
    res.render("index", {
        links: localDb.getAllLinks(),
        user: req.user
    });
};

function getSignUp(req, res) {
    res.render("signUpForm", {
        links: localDb.getAllLinks()
    });
}

async function postSignUp(req, res, next) {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.insertUser(username, hashedPassword);
        res.redirect("/");
    }
    catch(err) {
        return next(err);
    }
}

function getLogOut(req, res, next) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
};

module.exports = { 
    getIndex,
    getSignUp,
    postSignUp,
    getLogOut
};