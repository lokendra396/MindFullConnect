import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import postRoutes from "./routes/postRoute.js";
import contactRoutes from "./routes/contactRoute.js";
// const mongoose = require("mongoose");
//configure env
dotenv.config();

//database config
connectDB();

// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on port : ${PORT}`.bgCyan.white);
});
