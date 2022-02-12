/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  id: String,
  googleId: String,
  currentProject: String,
  username: {
    type: String,
    required: true,
    minLengh: 3,
    unique: true,
  },
  passwordHash: {
    type: String,
    minLengh: 3,
  },
  projects: [
    {
      projectName: { type: String },
      projectId: String,
      projectUsers: [{ userId: String, role: String }],
    },
  ],
});
userSchema.plugin(uniqueValidator);
userSchema.set("toJSON", {
  transform: (doc, received) => {
    received.id = received._id;
    delete received._id;
    delete received.passwordHash;
    delete received.__v;
  },
});

module.exports = mongoose.model("User", userSchema);
