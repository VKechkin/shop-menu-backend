const express = require("express");
const router = express.Router();

const { create } = require("../controllers/order.controller");

router.post("/new", create);

module.exports = router;
