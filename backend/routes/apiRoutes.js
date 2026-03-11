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

// 3. GET A SINGLE API BY SLUG
// When the frontend asks for "/api/apis/bank-statement", we find it in the database!
router.get("/:slug", async (req, res) => {
  try {
    // Look in the database for an API where the slug matches the URL
    const api = await ApiItem.findOne({ slug: req.params.slug });
    
    if (!api) {
      return res.status(404).json({ message: "API not found in database!" });
    }
    
    // If we find it, send the data back to the frontend!
    res.status(200).json(api);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;