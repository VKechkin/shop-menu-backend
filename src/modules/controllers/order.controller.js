const Order = require("../../bd/models/order");
const { getValidationOrder } = require("../validation/validationOrder");

module.exports.create = async (req, res) => {
  const { error } = getValidationOrder(req.body);

  if (error) {
    return res
      .status(400)
      .send(`Problem with data in filled fields: ${error.message}`);
  }

  const { body } = req;

  const order = new Order(body);
  order
    .save()
    .then((result) => {
      res.send({ data: result });
    })
    .catch((res) => {
      res.status(500).send("Something went wrong, please try again later!");
    });
};
