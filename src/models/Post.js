import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    ticket: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    guest: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },

   
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
