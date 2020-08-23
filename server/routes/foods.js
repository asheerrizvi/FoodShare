const express = require('express');
const _ = require('lodash');
const router = express.Router();
const { getDistance } = require('geolib');

const { Food, validateFood } = require('../models/food');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

router.get('/', auth, async (req, res) => {
  // If the food item has expired, change availability to false.
  const count = await Food.countDocuments({});
  if (count > 0) {
    await Food.updateMany(
      { expiresOn: { $lt: Date.now() } },
      { available: false }
    );
  }

  const userLat = req.body.lat;
  const userLong = req.body.long;

  // Find only the available food items.
  let food = await Food.find({ available: true });

  food = food.filter((foodItem) => {
    const distance = getDistance(
      { latitude: userLat, longitude: userLong },
      { latitude: foodItem.lat, longitude: foodItem.long }
    );
    return distance / 1000 <= 20;
  });

  res.send(food);
});

router.get('/:id', auth, async (req, res) => {
  const food = await Food.find({ _id: req.params.id });
  if (!food) return res.status(404).send("Food doesn't exist");

  res.send(food);
});

router.post('/', auth, async (req, res) => {
  const food = new Food(req.body);
  await food.save();

  res.send(food);
});

router.put('/:id', auth, async (req, res) => {
  const food = await Food.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });

  if (!food) return res.status(404).send('Food not found');
  res.send(food);
});

router.delete('/:id', auth, async (req, res) => {
  const food = await Food.findOneAndRemove({ _id: req.params.id });
  if (!food) return res.status(404).send('Food not found');
  res.send('Food deleted successfully');
});

module.exports = router;
