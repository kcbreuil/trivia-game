if (process.env.NODE_ENV !== "production") require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kcbreuil:Grammy32685!!@cluster0.ev7uy.mongodb.net/trivia-game?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const User = mongoose.model("User", {
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});
