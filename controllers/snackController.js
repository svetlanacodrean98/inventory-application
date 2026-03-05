const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getSnackById(req, res) {
    const { snackId } = req.params;
    
    const snack = await db.getSnackById(Number(snackId));

    if (!snack) {
        throw new CustomNotFoundError("Snack not found");
    }

    res.send(`Snack Name: ${snack.name}`);
}

module.exports = { getSnackById };