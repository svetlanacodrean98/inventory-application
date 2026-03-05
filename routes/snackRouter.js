const { Router } = require("express");

const snackRouter = Router();

snackRouter.get("/", (req, res) => res.send("All snacks"));
snackRouter.get("/:snackId", (req, res) => {
    const { snackId } = req.params;
    res.send(`Snack ID: ${snackId}`);
});

module.exports = snackRouter;