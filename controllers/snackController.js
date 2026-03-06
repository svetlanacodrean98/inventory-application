const database = require("../database");
const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getSnackById(req, res) {
    const { snackId } = req.params;
    const snack = await db.getSnackById(Number(req.params.snackId));

    if (!snack) {
        throw new CustomNotFoundError("Snack not found");
    }

    res.render("snack", {
        title: "Snack",
        links: database.getAllLinks(), 
        item: snack
    });
};

async function getAllSnacks(req, res) {
    const snacks = await db.getAllSnacks();
    res.render("snacks", {
        title: "Snacks",
        links: database.getAllLinks(), 
        list: snacks
    });
};

function createSnackGet(req, res) {
    res.render("createSnack", {
        title: "Create snack"
    });
};

async function createSnackPost(req, res) {
    const { name } = req.body;
    await db.insertSnack(name);
    res.redirect("/snacks");
}

async function updateSnackGet(req, res) {
    const snack = await db.getSnackById(Number(req.params.snackId));
    res.render("updateSnack", {
        title: "Update snack",
        snack: snack
    })
}

async function updateSnackPost(req, res) {
    const { name } = req.body;
    await db.updateSnack(req.params.snackId, name);
    res.redirect("/snacks");
}

function deleteSnackPost(req, res) {
    db.deleteSnack(req.params.snackId);
    res.redirect("/snacks");
}

module.exports = { 
    getSnackById, 
    getAllSnacks,
    createSnackGet,
    createSnackPost,
    updateSnackGet,
    updateSnackPost,
    deleteSnackPost
};