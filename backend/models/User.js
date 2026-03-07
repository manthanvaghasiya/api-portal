import mongoose from "mongoose";

// Think of this as a form we fill out for every new user
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true, // We MUST have a name
  },
  email: {
    type: String,
    required: true, // We MUST have an email
    unique: true,   // No two users can have the same email
  },
  password: {
    type: String,
    required: true, // We MUST have a password
  },
});

const User = mongoose.model("User", userSchema);
export default User;