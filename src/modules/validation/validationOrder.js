const Joi = require("joi");

exports.getValidationOrder = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().max(35),
    phone: Joi.string().required(),
    email: Joi.string().email().allow(""),
    delivery: Joi.string().max(150).allow(""),
    method: Joi.string(),
    comments: Joi.string().max(500).allow(""),
  });
  return schema.validate(data);
};
