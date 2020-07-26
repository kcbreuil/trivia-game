const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  week: {
    type: String,
    required: true,
  },
  reward: {
    type: String,
    required: true,
  },
  maxPerWeek: {
    type: Number,
    required: true,
  },
});

const Reward = mongoose.model("reward", rewardSchema);
module.exports = Reward;
