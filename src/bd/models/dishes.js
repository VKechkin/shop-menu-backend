const { Schema, model } = require("mongoose");

const dishesScheme = new Schema({
  title: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  img: String,
  desc: { type: String, required: true },
  delete: Boolean,
});

module.exports = Dishes = model("dishes", dishesScheme);
