const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const dailyInfoSchema = new Schema({
  date: {
    type: String,
    default: Date.now,
    required: true,
  },
  flow: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  pain: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
  mood: {
    type: String,
    required: true,
  },
  cravings: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    minlength: 1,
    maxlength: 280,
    required: true,
  },
});

const dailyInfo = model("dailyInfo", dailyInfoSchema);

module.exports = dailyInfo;
