import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom"; // Added for routing

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  // 1. New states to hold what the user types
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // To show errors or success
  
  const navigate = useNavigate(); // To move the user after they log in

  // 2. The function that runs when they click SIGN IN
  const handleSignin = async (e) => {
    e.preventDefault(); // Stops the page from refreshing

    try {
      // Send the login letter to our backend brain
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful! Welcome back.");
        
        // 3. THIS IS IMPORTANT: Save the VIP ticket in the browser's pocket
        localStorage.setItem("token", data.token);
        
        // Also save a little bit of user info if we want to show their name later
        localStorage.setItem("user", JSON.stringify(data.user));

        // Clear the form
        setEmail(""); setPassword("");

        // 4. Send them to the main dashboard or home page!
        // (You can change "/home" to whatever page they should see after logging in)
        setTimeout(() => {
          navigate("/"); 
        }, 1000);

      } else {
        setMessage(data.message); // Show the error (like "Wrong password")
      }
    } catch (error) {
      setMessage("Something went wrong connecting to the server.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 pt-32 flex justify-center">

      {/* MAIN CARD */}
      <div className="w-[1000px] h-[550px] bg-white rounded-xl shadow-xl flex overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-1/2 relative bg-[#0f6d61] text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0a5e54] rounded-r-[200px]" />
          <div className="relative z-10 text-center px-10">
            <div className="text-2xl font-bold mb-6">Arcelor Api-Portal</div>
            <h2 className="text-3xl font-semibold mb-2">Welcome Back!</h2>
            <p className="text-sm opacity-90 mb-8">
              Enter your personal details and start your journey with us
            </p>
            <Link to="/signup">
              <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-[#0a5e54] transition">
                SIGN UP
              </button>
            </Link>
            <div className="text-xs mt-12 opacity-70">DESIGN BY | MANTHAN</div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 flex items-center justify-center px-12">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-400 mb-4">Login to your account</p>

            {/* Show error or success messages here */}
            {message && (
              <div className={`text-sm text-center mb-4 font-semibold ${message.includes('successful') ? 'text-green-600' : 'text-red-500'}`}>
                {message}
              </div>
            )}

            {/* Added onSubmit to the form */}
            <form className="space-y-4" onSubmit={handleSignin}>

              {/* EMAIL */}
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

              {/* PASSWORD */}
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

              {/* FORGOT PASSWORD */}
              <div className="text-right text-sm text-[#0a5e54] cursor-pointer">
                Forgot your password?
              </div>

              {/* SIGNIN BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#0a5e54] text-white py-2 rounded-full mt-2 hover:bg-[#084d46] transition"
              >
                SIGN IN
              </button>

              <p className="text-sm text-gray-500 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0a5e54] font-semibold cursor-pointer">
                  Sign up
                </Link>
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;