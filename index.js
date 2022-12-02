const path = require("path");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Page Home
app.get("/", (req, res) => {
  res.send("SERVER ON");
});

// ZingMp3Router
const ZingMp3Router = require("./src/routes/ZingRouter");
app.use("/api", ZingMp3Router);

//UserRouter
const authRoute = require("./src/routes/auth");
app.use("/v1/auth", authRoute);

//Page Error

app.get("*", (req, res) => {
  res.send("Error");
});

//mongoDB
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connect Db success!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
