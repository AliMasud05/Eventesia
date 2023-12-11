import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,      
      
    },
    gender:{
     type:String,
    },
    contact: {
      type: String,      
      
    },
    address: {
      type: String,      
      
    },
   
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
