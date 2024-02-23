import app from "./app.js";
import { connectDb } from "./database.js";
import { config } from "dotenv";
config();
connectDb();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
