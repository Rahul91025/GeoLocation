const mongoose = require("mongoose");

const BooleanSchema = new mongoose.Schema({
  data: {
    type: Boolean,
    required: true,
  },
});

const BooleanModel = mongoose.model("BooleanData", BooleanSchema);
module.exports = BooleanModel;
