/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const projectSchema = mongoose.Schema({
  id: String,
  name: { type: String, required: true, unique: true },
  users: [{ username: String, role: String }],
});
projectSchema.plugin(uniqueValidator);
projectSchema.set("toJSON", {
  transform: (doc, received) => {
    received.id = received._id;
    delete received._id;
  },
});
projectSchema.plugin(uniqueValidator, { type: "mongoose-unique-validator" });

module.exports = mongoose.model("Project", projectSchema);
