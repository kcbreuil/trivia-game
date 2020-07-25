require("./db/mongoose");
const express = require("express"),
  cors = require("cors"),
  path = require("path");

//library from node.js to grab file paths

const app = express();

const Reward = require("./models/reward");
const Campaign = require("./models/campaign");
const User = require("./models/user");
const UserRoutes = require("./routes/user");
const Question = require("./models/question");
const QuestionRoutes = require("./routes/question");
const GiftCardRoutes = require("./routes/giftcard");
const RewardRoutes = require("./routes/giftcard");

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(QuestionRoutes);
app.use(GiftCardRoutes);
app.use(RewardRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
module.exports = app;
