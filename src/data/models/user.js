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
    select: false,
    minLengh: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  resetPasswordToken: String,
resetPasswordExpire: String,
  projects: [
    {
      projectName: { type: String },
      projectId: String,
      projectUsers: [{ userId: String, role: String }],
    },
  ],
});
userSchema.plugin(uniqueValidator, { type: "mongoose-unique-validator" });

module.exports = mongoose.model("User", userSchema);
