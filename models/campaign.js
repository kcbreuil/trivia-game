const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const campaignSchema = new mongoose.Schema({

    gift_template: {
      type: String
    },
    contacts: {
      type: Array,
      required: true
    },
    price_in_cents: {
      type: Number,
      required: true
    },
    brand_codes: {
      type: Array,
      required: true
    },
    expiry: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true
    }
  });



const Campaign = mongoose.model("campaign", campaignSchema);
module.exports = Campaign;
