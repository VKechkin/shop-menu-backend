const Joi = require("joi");

exports.getValidationDish = (data) => {
  const schema = Joi.object({
    _id: Joi.string(),
    category: Joi.string().required(),
    title: Joi.string().required().max(50),
    price: Joi.number().required(),
    desc: Joi.string().required().max(250),
    delete: Joi.boolean(),
  });
  return schema.validate(data);
};
