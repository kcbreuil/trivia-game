const express = require("express");
const Reward = require("../models/reward");
const router = new express.Router();

router.post("/reward", async (req, res) => {
  const reward = new Reward(req.body);
  try {
    await reward.save();
    res.status(201).send(reward);
  } catch (e) {
    res.status(400).send(e);
  }
});

//update rewards

router.get("/reward", async (req, res) => {
  Reward.find({})
    .then((reward) => {
      res.send(reward);
    })
    .catch((e) => {
      res.send(e);
    });
});

router.patch("/reward", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["maxPerWeek", "winningTime"];
  //for every element in the updates, if the update element match with some
  //of the allowedUpdates, so return true valid operation.
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    updates.forEach((update) => (reward[update] = req.body[update]));
    await reward.save();
    res.send(reward);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
