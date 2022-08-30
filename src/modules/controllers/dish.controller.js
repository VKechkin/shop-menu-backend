const Dishes = require("../../bd/models/dishes");

const { getValidationDish } = require("../validation/validationDish");

module.exports.create = async (req, res) => {
  const { error } = getValidationDish(req.body);

  if (error) {
    return res.status(400).send("Not all required fields have been completed!");
  }

  const { body } = req;

  const dish = new Dishes(body);
  dish
    .save()
    .then((result) => {
      res.send({ data: result });
    })
    .catch(() => {
      res.status(500).send("Error adding new dish!");
    });
};

module.exports.getAll = async (req, res) => {
  Dishes.find()
    .then((result) => {
      res.send({ data: result });
    })
    .catch(() => {
      res.status(500).send("Error getting all dishes!");
    });
};

module.exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      Dishes.deleteOne({ _id: id })
        .then(() => {
          res.status(200).send("Dish has been removed");
        })
        .catch(() => {
          res.status(500).send("Something went wrong, please try again later!");
        });
    } else {
      res.status(404).send("Dish id wasn't provided!");
    }
  } catch (error) {
    res.status(500).send("Something went wrong, please try again later!");
  }
};

module.exports.update = async (req, res) => {
  const id = req.params.id;

  const { error } = getValidationDish(req.body);

  if (error) {
    return res.status(400).send("Not all required fields have been completed!");
  }

  const body = req.body;

  try {
    if (id) {
      Dishes.updateOne({ _id: id }, body)
        .then(() => {
          res.status(200).send("The dish has been updated");
        })
        .catch(() => {
          res.status(500).send("Something went wrong, please try again later!");
        });
    }
  } catch (error) {
    res.status(500).send("Something went wrong, please try again later!");
  }
};
