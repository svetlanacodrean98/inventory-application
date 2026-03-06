const { Router } = require("express");
const drinkController = require("../controllers/drinkController");

const drinkRouter = Router();

drinkRouter.get("/", drinkController.getAllDrinks);
drinkRouter.get("/create", drinkController.createDrinkGet);
drinkRouter.post("/create", drinkController.createDrinkPost);
drinkRouter.get("/:drinkId/update", drinkController.updateDrinkGet);
drinkRouter.post("/:drinkId/update", drinkController.updateDrinkPost);
drinkRouter.get("/:drinkId", drinkController.getDrinkById);
drinkRouter.post("/:drinkId/delete", drinkController.deleteDrinkPost);

module.exports = drinkRouter;