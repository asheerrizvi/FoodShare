const mongoose = require('mongoose');
const Joi = require('joi');

const foodSchema = new mongoose.Schema({
  name: String,
  allergens: Array,
  diet: Array,
  long: Number,
  lat: Number,
  description: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  addedOn: {
    type: Date,
    default: Date.now,
  },
  expiresOn: {
    type: Date,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Food = mongoose.model('Food', foodSchema);

function validateFood(food) {
  const schema = Joi.object({
    name: Joi.string().required().max(30),
    description: Joi.string().max(120),
    quantity: Joi.number(),
    expiresOn: Joi.date().required(),
    lat: Joi.number().required(),
    long: Joi.number().required(),
  });

  return schema.validate(food);
}

module.exports.Food = Food;
module.exports.validateFood = validateFood;
