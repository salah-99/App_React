

const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({

    question: {
    type: String,
    required: true
  },
  reponse: {
    type: String,
    required: true
  },
  // category: {
  //   postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'categor(nom de table)'}
  // },
});

module.exports = mongoose.model("Music", QuestionSchema);