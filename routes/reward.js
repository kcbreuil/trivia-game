const express = require("express");
const Reward = require("../models/reward");
const router = new express.Router();
const mongoose = require("mongoose");

router.post("/rewards", async (req, res) => {
  const reward = new Reward({ ...req.body });
  try {
    await reward.save();
    console.log("aqui?");
    res.status(201).send({ reward });
    console.log("porque");
  } catch (e) {
    console.log("or here?");
    res.status(400).send(e);
  }
});
//update rewards

router.patch("/rewards/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["maxPerWeek"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const reward = await Reward.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!reward) {
      return res.status(404).send();
    }
    res.send(reward);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/rewards/:id", async (req, res) => {
  const _id = req.params.id;
  if (mongoose.Types.ObjectId.isValid(_id)) {
    try {
      const reward = await Reward.findById(_id);
      if (!reward) {
        return res.status(404).send();
      }
      res.send(reward);
    } catch (e) {
      res.status(500).send();
    }
  } else {
    res.status(400).send("Not a valid user id");
  }
});

router.get("/rewards", async (req, res) => {
  Reward.find({})
    .then((reward) => {
      res.send(reward);
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
