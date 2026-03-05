const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getDrinkById(req, res) {
    const { drinkId } = req.params;

    const drink = await db.getDrinkById(Number(drinkId));

    if (!drink) {
        throw new CustomNotFoundError("Drink not found");
    }

    // res.send(`Drink Name: ${drink.name}`);
    res.render("drink", {
        title: "Drink",
        links: db.getAllLinks(), 
        item: drink
    });
};

function getAllDrinks(req, res) {
    res.render("drinks", {
        title: "Drinks",
        links: db.getAllLinks(), 
        list: db.getAllDrinks() 
    });
};

module.exports = { getDrinkById, getAllDrinks };