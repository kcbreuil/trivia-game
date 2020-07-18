const express = require("express");
const router = new express.Router();
const axios = require("axios");

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

const makeCampaign = async () => {
  return axios.get(`https://api-testbed.giftbit.com/papi/v1/campaigns`, {
    headers: { Authorization: `Bearer ${process.env.API_KEY}` },
  });
};

router.post("/", async (request, response) => {
  try {
    const resp = await makeCampaign();
    response.send(resp.data);
  } catch (e) {
    console.log(e);
    response.status(500).send({ error: e.message });
  }
});

module.exports = router;
