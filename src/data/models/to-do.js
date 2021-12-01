const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, default: "New Project" },
  cards: [
    {
      id: String,
      title: String,
      isInsertingTask: Boolean,
      isNewCard: Boolean,
      taskIds: [String]
    }
  ],
  cardOrder: [String],
  tasks: [{ id: String, name: String, content: String }]
});

module.exports = mongoose.model("Project", projectSchema);
