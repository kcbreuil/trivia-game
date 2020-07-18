require("./db/mongoose");
const express = require("express"),
  cors = require("cors"),
  path = require("path");

const request = require("request");
//library from node.js to grab file paths

const app = express();

const User = require("./models/user");
const UserRoutes = require("./routes/user");
const Question = require("./models/question");
const QuestionRoutes = require("./routes/question");

app.use(cors());
app.use(express.json());
app.use(UserRoutes);
app.use(QuestionRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
module.exports = app;
