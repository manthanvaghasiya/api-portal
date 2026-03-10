import express from "express";
import ApiItem from "../models/ApiItem.js"; // Bring in the new filing cabinet

const router = express.Router();

// ==========================================
// 1. ADD A NEW API (For the Admin Panel)
// ==========================================
router.post("/add-api", async (req, res) => {
  try {
    const newApi = new ApiItem({
  ...req.body,
  inputData: [],
  outputData: [],
  errorData: []
});
    await newApi.save();

    res.status(201).json({
      message: "Success! API added to the portal.",
      data: newApi
    });

  } catch (error) {
    res.status(500).json({
      message: "Oops! Something went wrong.",
      error: error.message
    });
  }
});
// ==========================================
// 2. GET ALL APIs (To display on the Sandbox page later)
// ==========================================
router.get("/all-apis", async (req, res) => {
  try {
    const apis = await ApiItem.find();
    res.status(200).json(apis);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch APIs.", error: error.message });
  }
});

export default router;