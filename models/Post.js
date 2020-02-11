const mongoose = require("mongoose");

const PostScheme = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date: Date
});

module.exports = mongoose.model("Posts", PostScheme);
