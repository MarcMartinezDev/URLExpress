import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: 86400 }, // 24 hours
  },
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
