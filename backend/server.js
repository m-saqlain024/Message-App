import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound ,errorHandler } from "./middleware/errorMiddlewate.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5000;


connectDB();
const app = express();
// app.use("api/users", userRoutes);
app.get("/", (req, res) => res.send("hello world"));


// app.use(notFound)
// app.use(errorHandler)
app.listen(port, () => console.log(`Server started at ${port}`));
