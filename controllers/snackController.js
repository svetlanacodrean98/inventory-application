const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getSnackById(req, res) {

    const { snackId } = req.params;
    const snack = await db.getSnackById(Number(snackId));

    if (!snack) {
        throw new CustomNotFoundError("Snack not found");
    }

    res.render("snack", {
        title: "Snack",
        links: db.getAllLinks(), 
        item: snack
    });
};

function getAllSnacks(req, res) {
    res.render("snacks", {
        title: "Snacks",
        links: db.getAllLinks(), 
        list: db.getAllSnacks() 
    });
};

function createSnackGet(req, res) {
    res.render("createSnack", {
        title: "Create snack"
    });
};

function createSnackPost(req, res) {
    const { name } = req.body;
    db.addSnack({ name });
    res.redirect("/snacks");
}

async function updateSnackGet(req, res) {
    const snack = await db.getSnackById(Number(req.params.snackId));
    res.render("updateSnack", {
        title: "Update snack",
        snack: snack
    })
}

function updateSnackPost(req, res) {
    const { name } = req.body;
    db.updateSnack(req.params.snackId, name);
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