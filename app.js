import express from "express";
import apiRouter from "./src/routes/api.routes.js";
import router from "./src/routes/routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//app.use(router);
app.use(router);
app.use("/api", apiRouter);

export default app;
