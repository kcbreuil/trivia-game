const express = require("express");
const axios = require("axios");
const { response } = require("express");
const router = new express.Router();

// const getGiftCard = async () => {
//   return axios.get(`https://api-testbed.giftbit.com/papi/v1/ping`, {
//     headers: { Authorization: `Bearer ${process.env.APIKEY}` },
//   });
// };
// router.get("/", async (request, response) => {
//   axios
//     .get("https://api-testbed.giftbit.com/papi/v1/ping")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

router.get("/", async (req, res) => {
  let { data } = await axios.get(
    `https://api-testbed.giftbit.com/papi/v1/ping`,
    {
      headers: { Authorization: `Bearer ${process.env.APIKEY}` },
    }
  );
  res.send(data);
});

module.exports = router;
