const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  descripcion: { type: String, required: true },
  estadoBug: String,
  severidad: String,
  assignadoA: {
    type: String,
    default: "João"
  },
  reportedAt: {
    type: Date
  },
  comments: [
    {
      contenido: String,
      commentId: String
    }
  ]
});

module.exports = mongoose.model("Bug", bugSchema);
