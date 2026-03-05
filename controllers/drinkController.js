const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getDrinkById(req, res) {
    const { drinkId } = req.params;

    const drink = await db.getDrinkById(Number(drinkId));

    if (!drink) {
        throw new CustomNotFoundError("Drink not found");
    }

    res.send(`Drink Name: ${drink.name}`);
};

module.exports = { getDrinkById };