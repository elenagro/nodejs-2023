require("dotenv").config();
const express = require("express");
const locations = require("./handlers/locations");
const db = require("./pkg/db");

app = express();
app.use(express.json());

db.init();

app.get("/locations/:id", locations.getOne);
app.get("/locations", locations.getAll);

app.listen(process.env.PORT, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully");
});
