if (process.env.NODE_ENV !== "production") require("dotenv").config();

const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://kcbreuil:Grammy32685!!@cluster0.ev7uy.mongodb.net/trivia-game?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
  console.log("Connected to MongoDB");
} catch (e) {
  console.log(e.toString());
}
