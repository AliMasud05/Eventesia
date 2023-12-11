import mongoose from "mongoose";

const { Schema } = mongoose;

const ticketSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    ticket: {
      type: Number,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

export default mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
