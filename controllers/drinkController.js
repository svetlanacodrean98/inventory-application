const database = require("../database");
const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getDrinkById(req, res) {
    const { drinkId } = req.params;
    const drink = await db.getDrinkById(Number(req.params.drinkId));

    if (!drink) {
        throw new CustomNotFoundError("Drink not found");
    }

    res.render("drink", {
        title: "Drink",
        links: database.getAllLinks(), 
        item: drink
    });
};

async function getAllDrinks(req, res) {
    const drinks = await db.getAllDrinks();
    res.render("drinks", {
        title: "Drinks",
        links: database.getAllLinks(), 
        list: drinks
    });
};

function createDrinkGet(req, res) {
    res.render("createDrink", {
        title: "Create drink"
    });
};

async function createDrinkPost(req, res) {
    const { name } = req.body;
    await db.insertDrink(name);
    res.redirect("/drinks");
}

async function updateDrinkGet(req, res) {
    const drink = await db.getDrinkById(Number(req.params.drinkId));
    res.render("updateDrink", {
        title: "Update drink",
        drink: drink
    })
}

async function updateDrinkPost(req, res) {
    const { name } = req.body;
    await db.updateDrink(req.params.drinkId, name);
    res.redirect("/drinks");
}

function deleteDrinkPost(req, res) {
    db.deleteDrink(req.params.drinkId);
    res.redirect("/drinks");
}

module.exports = { 
    getDrinkById, 
    getAllDrinks,
    createDrinkGet,
    createDrinkPost,
    updateDrinkGet,
    updateDrinkPost,
    deleteDrinkPost
};