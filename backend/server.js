import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

// Open the secret safe
dotenv.config();

// Create the messenger
const app = express();

// Tell the messenger to understand JSON (the language React speaks) and use CORS
app.use(express.json());
app.use(cors({
  // REMOVED the trailing slash from the vercel link!
  origin: ["http://localhost:5173", "https://arcelorapiportal.vercel.app"], 
  credentials: true
}));

// Tell the messenger to use our new auth paths!
app.use("/api/auth", authRoutes);

// Connect to the Database (The Filing Cabinet)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully! 🎉"))
  .catch((err) => console.log("Database connection failed 😔", err));

// A simple test route to say hello
app.get("/", (req, res) => {
  res.send("Hello! The server is running!");
});

// Turn the server on!
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
