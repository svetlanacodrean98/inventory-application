const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getIndex);
indexRouter.get("/sign-up", indexController.getSignUp);
indexRouter.post("/sign-up", indexController.postSignUp);
indexRouter.get("/log-out", indexController.getLogOut);

module.exports = indexRouter;