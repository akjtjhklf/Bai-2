const express = require("express");

const odersController = require("../controllers/odersController");
const verifyAuth = require("../middlewares/verifyAuth")

const odersRouter = express.Router();

odersRouter.get("/", verifyAuth,odersController.getOrdersWithProducts);

module.exports = odersRouter;