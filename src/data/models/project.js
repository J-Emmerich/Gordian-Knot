const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const projectSchema = mongoose.Schema({
  id: String,
  name: String,
  users: [{ userId: String, role: String }]
});
projectSchema.plugin(uniqueValidator);
projectSchema.set("toJSON", {
  transform: (doc, received) => {
    received.id = received._id;
    delete received._id;
  }
});

module.exports = mongoose.model("Project", projectSchema);
