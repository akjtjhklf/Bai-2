const express = require("express");

const inventoriesController = require("../controllers/inventoriesController");
const verifyAuth = require("../middlewares/verifyAuth")

const inventoriesRouter = express.Router();

inventoriesRouter.get("/", verifyAuth,inventoriesController.getProducts);

module.exports = inventoriesRouter;