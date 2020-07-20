const express = require("express");
const router = new express.Router();
const Question = require("../models/question");
const {auth} = require("../middleware/auth.js");
const Campaign = require("../models/campaign");

router.get("/questions", auth, async (req, res) => {
  Question.find({})
    .then((questions) => {
      res.send(questions);
    })
    .catch((e) => {
      res.send(e);
    });
});

router.post("/questions", async (req, res) => {
  const question = new Question({
    ...req.body,
  });
  try {
    question.save();
    res.status(201).send(question);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
