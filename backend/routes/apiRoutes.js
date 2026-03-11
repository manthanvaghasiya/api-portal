import express from "express";
import ApiItem from "../models/ApiItem.js"; 

const router = express.Router();

// 1. SAVE A NEW API
router.post("/add", async (req, res) => {
  try {
    const newApi = new ApiItem(req.body);
    await newApi.save();
    res.status(201).json({ message: "Success! API saved to database.", data: newApi });
  } catch (error) {
    // If the slug already exists, tell the user!
    if (error.code === 11000) {
      return res.status(400).json({ message: "An API with this slug already exists!" });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 2. GET ALL APIs
router.get("/all", async (req, res) => {
  try {
    const apis = await ApiItem.find();
    res.status(200).json(apis);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch APIs." });
  }
});

export default router;