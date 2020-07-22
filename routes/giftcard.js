const express = require("express");
const router = new express.Router();
const axios = require("axios");
const Campaign = require("../models/campaign");
const mongoose = require("mongoose");
const User = require("../models/user");
const auth = require("../middleware/auth.js");

const getGiftCards = async () => {
  return axios.get(`https://api-testbed.giftbit.com/papi/v1/brands`, {
    headers: { Authorization: `Bearer ${process.env.API_KEY}` },
  });
};

router.get("/", async (request, response) => {
  try {
    const resp = await getGiftCards();
    response.send(resp.data);
  } catch (e) {
    console.error(e);
    response.status(500).send({ error: e.message });
  }
});

/* to add the campaign in to our DB */

// router.post("/campaign", async (req, res) => {
//   const campaign = new Campaign({
//     ...req.body,
//   });
//   try {
//     campaign.save();
//     res.status(201).send(campaign);
//   } catch (error) {
//     res.status(402).send(error);
//   }
// });

// /* to get specific campaign from our DB */

// router.get("/campaign/:_id", async (req, res) => {
//   const { _id } = req.params;
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(400).send("Not a valid id");
//   }
//   try {
//     const campaign = await Campaign.findById(_id);
//     if (!campaign) {
//       return res.status(404).send();
//     }
//     res.send(campaign);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

//=======================================//
/*Sending a new campaign to giftbit*/

router.post("/campaign", auth, async (req, res) => {
    const expiryDate = "2020-11-01"
    const body = {
      gift_template: "HRUFIRCFDPRR", //pre defined first? how does this works?
      contacts: [
        {
          firstname: `${req.user.firstName}`,
          lastname: `${req.user.lastName}`,
          email: `${req.user.email}`,
        },
      ],
      price_in_cents: req.body.data.result, //should be number
      brand_codes: ["amazonus"], // pre defined first
      expiry: `${expiryDate}`,
      id: `${Math.random().toString(36).substring(2)}`,
    };
    try {
      const { data } = await axios.post(
        "https://api-testbed.giftbit.com/papi/v1/campaign",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
        }
      );
      console.log("Data sent successfully.");
      console.log("Body: ", body);
    } catch (err) {
      console.error(err);
    }
  });

// TEST 1 - API POST REQ WITH FAKE DATA

// const body = {
//   "gift_template": "QPWCWUJJCDUT",
//   "contacts": [
//     {
//       "firstname":`Lady`,
//       "lastname":"Gaga",
//       "email":"mothermonster1@gaga100.com"
//     }
//   ],
//   "price_in_cents":2500,
//   "brand_codes": ["amazonus"],
//   "expiry":"2020-11-02",
//   "id":"my45_client"
// }

// const createCampaign = async () => {
//   try{
//     const { data } = await axios.post('https://api-testbed.giftbit.com/papi/v1/campaign', body, {
//     headers: { "Content-Type": 'application/json', Authorization: `Bearer ${process.env.API_KEY}` }
//     });
//     console.log('Data sent successfully.')
//     console.log('Body: ', body)
//   } catch (err) {
//     console.error(err);
//   }};

module.exports = router;
