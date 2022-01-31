const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const dailyInfoSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },
  flow: {
    type: Number,
    min: 0,
    max: 5,
    required: false,
  },
  pain: {
    type: Number,
    min: 0,
    max: 5,
    required: false,
  },
  mood: {
    type: String,
    required: false,
  },
  cravings: {
    type: [],
    required: false,
  },
  notes: {
    type: String,
    minlength: 1,
    maxlength: 280,
  },
});

const dailyInfo = model("dailyInfo", dailyInfoSchema);

module.exports = dailyInfo;
