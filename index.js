import app from "./app.js";
import { connectDb } from "./database.js";
import env from "dotenv";

env.config();
connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
