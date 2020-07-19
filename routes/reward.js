const express = require("express");
const Reward = require("../models/reward");
const router = new express.Router();

router.post("/rewards", async (req, res) => {
  const reward = new Reward(req.body);
  try {
    await reward.save();
    //   const token = await user.generateAuthToken();
    res.status(201).send({ reward });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
