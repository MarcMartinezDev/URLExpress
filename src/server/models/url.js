import mongoose from "mongoose";

/**
 * Creates a new schema for the Url collection
 * @param {object} mongoose - The Mongoose instance
 * @returns {object} The Url schema
 */
const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
  customUrl: {
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
