const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  update,
  deleteOne,
} = require("../controllers/dish.controller");

router.get("/list", getAll);
router.post("/new", create);
router.patch("/:id", update);
router.delete("/:id", deleteOne);

module.exports = router;
