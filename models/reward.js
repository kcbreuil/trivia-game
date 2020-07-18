const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  reward: {
    type: String,
  },
  maxPerWeek: {
    type: Number,
  },
  winningDatetime: {
    type: Array,
  },
  lastWon: {
    type: String,
  },
});

const Reward = mongoose.model("reward", rewardSchema);
module.exports = Reward;
