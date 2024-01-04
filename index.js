const express = require("express");
const bodyParser = require("body-parser");

const inventoriesRouter = require("./routes/inventories")
const usersRouter = require("./routes/users")
const odersRouter = require("./routes/oders")
const { connectToDb } = require("./utils/connectDb");

const app = express();
app.use(bodyParser.json());

app.use("/inventories", inventoriesRouter);
app.use("/users", usersRouter);
app.use("/oders", odersRouter);

app.listen(3001, () => {
  console.log("App is running at 3001");
  connectToDb();
});
