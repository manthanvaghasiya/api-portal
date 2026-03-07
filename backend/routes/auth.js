import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Bringing in our filing form

const router = express.Router();

// ==========================================
// 1. SIGN UP ROUTE (Creating a new account)
// ==========================================
router.post("/signup", async (req, res) => {
  try {
    // 1. Get the details the user typed in
    const { fullName, email, password } = req.body;

    // 2. Check if this email is already in our filing cabinet
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Uh oh! This email is already used." });
    }

    // 3. Scramble (Hash) the password so it is safe
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create the new user with the scrambled password
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // 5. Save them in the database!
    await newUser.save();
    res.status(201).json({ message: "Yay! Account created successfully." });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong.", error: error.message });
  }
});

// ==========================================
// 2. SIGN IN ROUTE (Logging in)
// ==========================================
router.post("/signin", async (req, res) => {
  try {
    // 1. Get the email and password the user typed
    const { email, password } = req.body;

    // 2. Look for this email in our filing cabinet
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "We can't find an account with that email." });
    }

    // 3. Check if the typed password matches the saved scrambled password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Oops! Wrong password." });
    }

    // 4. Create a special VIP Ticket (JWT Token) for the user
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET, // Our secret stamp
      { expiresIn: "1h" } // The ticket expires in 1 hour
    );

    // 5. Give the ticket and user details back to the frontend
    res.status(200).json({ 
      message: "Welcome back!", 
      token, 
      user: { id: user._id, fullName: user.fullName, email: user.email } 
    });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong.", error: error.message });
  }
});

export default router;