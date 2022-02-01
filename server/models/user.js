const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({

  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  flowTalk: [
    {
      type: Schema.Types.ObjectId,
      ref: "FlowTalk",
    },
  ],
});

userSchema.pre('save', async function (next) {
  // console.log('presave')
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
