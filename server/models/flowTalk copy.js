const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const flowTalkSchema = new Schema({
  flowTalkTitle: {
    type: String,
    required: "You need to leave a title!",
    minlength: 1,
    maxlength: 45,
    trim: true,
    unique: true,
  },
  flowTalkText: {
    type: String,
    required: "You need to leave a Flow Talk!",
    minlength: 1,
    maxlength: 1200,
    trim: true,
  },
  flowTalkAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const flowTalk = model("flowTalk", flowTalkSchema);

module.exports = flowTalk;
