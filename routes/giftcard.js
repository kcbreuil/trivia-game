const express = require("express");
const router = new express.Router();
const axios = require("axios");
const Campaign = require("../models/campaign");
const mongoose = require("mongoose");

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

// const makeCampaign = async () => {
//   return axios.post(`https://api-testbed.giftbit.com/papi/v1/campaign`, {
//     headers: { Authorization: `Bearer ${process.env.API_KEY}` },
//   });
// };

// router.post("/", async (request, response) => {
//   try {
//     const resp = await makeCampaign();
//     response.send(resp.data);
//   } catch (e) {
//     console.log(e);
//     response.status(500).send({ error: e.message });

/* to add the campaign in to our DB */

router.post("/campaign", async (req, res) => {
  const campaign = new Campaign({
    ...req.body,
  });
  try {
    campaign.save();
    res.status(201).send(campaign);
  } catch (error) {
    res.status(402).send(error);
  }
});
/* to get specific campaign from our DB */

router.get("/campaign/:_id", async (req, res) => {
  const { _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send("Not a valid id");
  }
  try {
    const campaign = await Campaign.findById(_id);
    if (!campaign) {
      return res.status(404).send();
    }
    res.send(campaign);
  } catch (e) {
    res.status(500).send();
  }
});

const body = {
  gift_template: "NZUESQJYOYVG",
  contacts: [
    {
      firstname: "Lady",
      lastname: "Gaga",
      email: "mothermonster1@gaga.com",
    },
  ],
  price_in_cents: 2500,
  brand_codes: ["amazonus"],
  expiry: "2020-11-01",
  id: "my2_client",
};

/*Sending a new campaign to giftbit*/
const createCampaign = async () => {
  /*axios.get('/campaign/:_id', async (req, res) => {
  // somehow I have to bring campaign data in here and send this data using axios below
  });*/
  try {
    const { data } = await axios.post(
      "https://api-testbed.giftbit.com/papi/v1/campaign",
      data,
      {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ==.bjFCdEVmWEpMbGVSamd1RzVKdGd0bXJnbXNSQkpOMFlnSXd0d29xQmR2blUrNGYyd0J1MGJ4dk1zZ2orU3JDL1FjQ1VVczNBOXlZdi9IUXhBOGQzM0c1cGQ1UjZtNk1VbzBwTmNZOHhGMnFWTHU3STQrTjFHQ1ppT2FpMWpIKzI=.5bKyBiGbuoiuGMfhoVEMKyUkUDI+KTdKn8zeHtX62PU=`,
        },
      }
    );
    console.log(`Status: ${res.status}`);
  } catch (err) {
    console.error(err);
  }
};
// axios.post(`https://api-testbed.giftbit.com/papi/v1/campaign`, {
//   headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ==.bjFCdEVmWEpMbGVSamd1RzVKdGd0bXJnbXNSQkpOMFlnSXd0d29xQmR2blUrNGYyd0J1MGJ4dk1zZ2orU3JDL1FjQ1VVczNBOXlZdi9IUXhBOGQzM0c1cGQ1UjZtNk1VbzBwTmNZOHhGMnFWTHU3STQrTjFHQ1ppT2FpMWpIKzI=.5bKyBiGbuoiuGMfhoVEMKyUkUDI+KTdKn8zeHtX62PU=` },
//   body:
// })
// .then( (res)=>{
//   console.log(`Status: ${res.status}`);
//   console.log('Body: ', res.body);
// }).catch((err) => {
//   console.error(err);
// });

createCampaign();
module.exports = router;
