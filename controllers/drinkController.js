const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getDrinkById(req, res) {

    const { drinkId } = req.params;
    const drink = await db.getDrinkById(Number(drinkId));

    if (!drink) {
        throw new CustomNotFoundError("Drink not found");
    }

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

function createDrinkGet(req, res) {
    res.render("createDrink", {
        title: "Create drink"
    });
};

function createDrinkPost(req, res) {
    const { name } = req.body;
    db.addDrink({ name });
    res.redirect("/drinks");
}

async function updateDrinkGet(req, res) {
    const drink = await db.getDrinkById(Number(req.params.drinkId));
    res.render("updateDrink", {
        title: "Update drink",
        drink: drink
    })
}

function updateDrinkPost(req, res) {
    const { name } = req.body;
    db.updateDrink(req.params.drinkId, name);
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