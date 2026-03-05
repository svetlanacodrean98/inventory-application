const { Router } = require("express");
const { getSnackById } = require("../controllers/snackController");

const snackRouter = Router();

snackRouter.get("/", (req, res) => res.send("All snacks"));
snackRouter.get("/:snackId", getSnackById);

module.exports = snackRouter;