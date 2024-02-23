import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/db_name");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
