const mongoose = require("mongoose");

const teyitci = mongoose.Schema({
  _id: String,
  teyitler: Number
});

module.exports = mongoose.model("Teyitci", teyitci);
