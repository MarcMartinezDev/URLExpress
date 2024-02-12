import app from "./app.js";
import { PORT } from "./config.js";
import { connectDb } from "./database.js";

connectDb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
