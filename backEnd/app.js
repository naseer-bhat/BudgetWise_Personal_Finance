import express from "express";
import { connectToDB } from "./src/config/db.js";
import allRoutes from "./src/routes/routes.js";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
connectToDB(process.env.MONGODB_URI);
app.use("/api/", allRoutes);
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
