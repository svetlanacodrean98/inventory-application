const { Router } = require("express");
const { getDrinkById, getAllDrinks } = require("../controllers/drinkController");

const drinkRouter = Router();

drinkRouter.get("/", getAllDrinks);
drinkRouter.get("/:drinkId", getDrinkById);

module.exports = drinkRouter;