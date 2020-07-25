const express = require("express");
const Reward = require("../models/reward");
const router = new express.Router();

router.post("/reward", async (req, res) => {
  const reward = new Reward({ ...req.body });
  try {
    reward.save();
    res.status(201).send({});
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/reward", async (req, res) => {
  Reward.find({})
    .then((reward) => {
      res.send(reward);
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
