const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  gift_template: {
    type: String,
  },
  contacts: {
    type: String,
  },
  prince_in_cents: {
    type: Number,
    required: true,
  },
});

const Campaign = mongoose.model("campaign", campaignSchema);
module.exports = Campaign;
