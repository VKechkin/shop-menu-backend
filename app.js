require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dishRoutes = require("./src/modules/routes/dishRouter");
const orderRoutes = require("./src/modules/routes/orderRouter");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/dishes", dishRoutes);
app.use("/orders", orderRoutes);

const uri = process.env.URI;

const connect = () => {
  try {
    mongoose.connect(uri);
  } catch (e) {
    console.log("ERROR connect", e);
  }
};

connect();

mongoose.connection.on("error", (err) => {
  logError(err);
});

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Example app lestening on port ${PORT}!`);
    });
  } catch (e) {
    console.log("ERROR port", e);
  }
};

start();
