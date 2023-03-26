import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  name: { type: String, required: true },
  estadoContrato: String,
  modeloContrato: String,
  pets: [
    {
      petType: String,
      petName: String,
      petId: String,
      comment: String,
    },
  ],
});

export const Customer = model("Customer", customerSchema);
