const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  projectId: { type: String },
  name: { type: String, required: true },
  estadoContrato: String,
  modeloContrato: String,
  pets: [
    {
      petType: String,
      petName: String,
      petId: String,
      comment: String
    }
  ]
});

module.exports = mongoose.model("Customer", customerSchema);
