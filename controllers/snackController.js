const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getSnackById(req, res) {
    const { snackId } = req.params;
    
    const snack = await db.getSnackById(Number(snackId));

    if (!snack) {
        throw new CustomNotFoundError("Snack not found");
    }

    // res.send(`Snack Name: ${snack.name}`);
    res.render("snack", {
        title: "Snack",
        links: db.getAllLinks(), 
        item: snack
    });
}

function getAllSnacks(req, res) {
    res.render("snacks", {
        title: "Snacks",
        links: db.getAllLinks(), 
        list: db.getAllSnacks() 
    });
};

module.exports = { getSnackById, getAllSnacks };