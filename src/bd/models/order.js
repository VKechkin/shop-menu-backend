const { Schema, model } = require("mongoose");

const orderScheme = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  delivery: { type: String },
  method: { type: String, required: true },
  comments: { type: String },
});

module.exports = Order = model("orders", orderScheme);
