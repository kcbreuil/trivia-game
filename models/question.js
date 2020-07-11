const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  correct_answer: {
    type: String,
    required: true,
    trim: true,
  },
  incorrect_answers: {
    type: Array,
    required: true,
    trim: true,
  },
});

const Question = mongoose.model("question", questionSchema);
module.exports = Question;
