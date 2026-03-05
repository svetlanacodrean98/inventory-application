const { Router } = require("express");
const { getDrinkById } = require("../controllers/drinkController");

const drinkRouter = Router();

drinkRouter.get("/", (req, res) => res.send("All drinks"));
drinkRouter.get("/:drinkId", getDrinkById);

module.exports = drinkRouter;