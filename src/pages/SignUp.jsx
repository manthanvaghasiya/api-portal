import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom"; // Added for routing

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // 1. New states to hold what the user types
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // To show errors or success
  
  const navigate = useNavigate(); // To move the user to another page later

  // 2. The function that runs when they click SIGN UP
  const handleSignup = async (e) => {
    e.preventDefault(); // Stops the page from refreshing

    // Check if passwords match first!
    if (password !== confirmPassword) {
      setMessage("Oops! Passwords do not match.");
      return;
    }

    try {
      // Send the letter to our backend brain
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Yay! Account created. You can now sign in.");
        // We can clear the form now
        setFullName(""); setEmail(""); setPassword(""); setConfirmPassword("");
      } else {
        setMessage(data.message); // Show the error from the server (like "email already used")
      }
    } catch (error) {
      setMessage("Something went wrong connecting to the server.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 pt-32 flex justify-center">

      {/* Main Card */}
      <div className="w-[1000px] h-[550px] bg-white rounded-xl shadow-xl flex overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-1/2 relative bg-[#0f6d61] text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0a5e54] rounded-r-[200px]" />
          <div className="relative z-10 text-center px-10">
            <div className="text-2xl font-bold mb-6">Arcelor Api-Portal</div>
            <h2 className="text-3xl font-semibold mb-2">Architect the Future of Finance</h2>
            <p className="text-sm opacity-90 mb-8">
              To stay connected with us please login with your personal info
            </p>
            <Link to="/signin">
              <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-[#0a5e54] transition">
                SIGN IN
              </button>
            </Link>
            <div className="text-xs mt-12 opacity-70">DESIGN BY | MANTHAN</div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 flex items-center justify-center px-12">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Create Account</h2>
            <p className="text-sm text-gray-400 mb-4">Sign up to continue</p>

            {/* Show error or success messages here */}
            {message && (
              <div className="text-sm text-center mb-4 text-red-500 font-semibold">
                {message}
              </div>
            )}

            {/* Added onSubmit to the form */}
            <form className="space-y-4" onSubmit={handleSignup}>

              {/* Full Name */}
              <div>
                <label className="text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} // Connect box to state
                  required
                  className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0a5e54]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Connect box to state
                  required
                  className="w-full mt-1 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0a5e54]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-gray-600">Password</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Connect box to state
                    required
                    className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0a5e54]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-2.5 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm text-gray-600">Confirm Password</label>
                <div className="relative mt-1">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} // Connect box to state
                    required
                    className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0a5e54]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-2.5 text-gray-500"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full bg-[#0a5e54] text-white py-2 rounded-full mt-4 hover:bg-[#084d46] transition"
              >
                SIGN UP
              </button>

              <p className="text-sm text-gray-500 text-center">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#0a5e54] font-semibold cursor-pointer">
                  Sign in
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;