const express = require("express");
const Reward = require("../models/reward");
const router = new express.Router();

router.post("/reward", async (req, res) => {
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
