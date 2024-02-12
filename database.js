import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/short-url");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
