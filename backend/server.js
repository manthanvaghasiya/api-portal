import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import authRoutes from "./routes/auth.js"
import adminRoutes from "./routes/admin.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)

const PORT = process.env.PORT || 5000

// Connect DB then start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected")

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
  })
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:", err)
})