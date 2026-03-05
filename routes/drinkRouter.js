const { Router } = require("express");

const drinkRouter = Router();

drinkRouter.get("/", (req, res) => res.send("All drinks"));
drinkRouter.get("/:drinkId", (req, res) => {
    const { drinkId } = req.params;
    res.send(`Drink ID: ${drinkId}`);
});

module.exports = drinkRouter;