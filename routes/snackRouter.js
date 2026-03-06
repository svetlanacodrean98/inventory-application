const { Router } = require("express");
const snackController = require("../controllers/snackController");

const snackRouter = Router();

snackRouter.get("/", snackController.getAllSnacks);
snackRouter.get("/create", snackController.createSnackGet);
snackRouter.post("/create", snackController.createSnackPost);
snackRouter.get("/:snackId/update", snackController.updateSnackGet);
snackRouter.post("/:snackId/update", snackController.updateSnackPost);
snackRouter.get("/:snackId", snackController.getSnackById);
snackRouter.post("/:snackId/delete", snackController.deleteSnackPost);

module.exports = snackRouter;