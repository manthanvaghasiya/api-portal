import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/apiRoutes.js";

// Open the secret safe
dotenv.config();

// Create the messenger
const app = express();

// Tell the messenger to understand JSON and use CORS
app.use(express.json());
app.use(cors({
  // Accept requests from anywhere for now to ensure it's not a CORS blocking issue
  origin: "*", 
  credentials: true
}));

// Tell the messenger to use our routes
app.use("/api/auth", authRoutes);
app.use("/api/apis", apiRoutes);

// A simple test route to say hello
app.get("/", (req, res) => {
  res.send("Hello! The server is running!");
});

// Turn the server on!
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });