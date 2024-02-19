import mongoose from "mongoose";
import env from "dotenv";

env.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST || "mongodb://127.0.0.1:27017/short-url");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
