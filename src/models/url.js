import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    unique: true,
    type: String,
    required: true,
  },
  customUrl: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
