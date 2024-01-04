const { MongoClient } = require("mongodb");

const db = {};
const MONGODB_URL = "mongodb://127.0.0.1:27017";
const DATABASE = "final_test";

async function connectToDb () {
  console.log("Connect to database successfully!!");
  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  const database = client.db(DATABASE);

  db.inventories = database.collection("inventories");
  db.orders = database.collection("orders");
  db.users = database.collection("users");
};

module.exports = { connectToDb, db };
