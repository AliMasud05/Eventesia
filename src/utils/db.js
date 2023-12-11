import mongoose from "mongoose";

const MONGO =
  "mongodb+srv://prestige-planner:akgT7rg1znA1Q4Cm@cluster0.memgfjc.mongodb.net/prestige-planner";

const connect = async () => {
  try {
    await mongoose.connect(MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
