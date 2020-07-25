const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  reward: {
    type: String,
    required: true,
  },
  maxPerWeek: {
    type: Number,
    required: true,
  },
  winningDateTime: {
    type: Array,
    required: true,
  },
  lastWon: {
    type: String,
  },
});

const Reward = mongoose.model("reward", rewardSchema);
module.exports = Reward;
