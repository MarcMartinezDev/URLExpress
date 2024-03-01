import app from "./app.js";
import { connectDb } from "./database.js";
import { config } from "dotenv";

config();
connectDb();

/**
 * Starts the server and listens for incoming requests.
 * @param {number} [port=3000] - The port number to listen on.
 */
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
