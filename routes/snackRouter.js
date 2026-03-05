const { Router } = require("express");
const { getSnackById, getAllSnacks } = require("../controllers/snackController");

const snackRouter = Router();

snackRouter.get("/", getAllSnacks);
snackRouter.get("/:snackId", getSnackById);

module.exports = snackRouter;