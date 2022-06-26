const Joi = require('joi');

const searchBarSchema = Joi.object({
  searchedText: Joi.string()
    .allow('')
    .pattern(/^[a-zA-Z]+(\s?[a-zA-z]+)*$/),
  // .required(),
});

module.exports = searchBarSchema;
