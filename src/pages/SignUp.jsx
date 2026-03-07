import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); 
  
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Oops! Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("https://api-portal-lyuy.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Yay! Account created. You can now sign in.");
        setFullName(""); setEmail(""); setPassword(""); setConfirmPassword("");
        setTimeout(() => navigate("/signin"), 2000); // Send to sign in after 2 seconds
      } else {
        setMessage(data.message); 
      }
    } catch (error) {
      setMessage("Something went wrong connecting to the server.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#011112] transition-colors duration-500 flex justify-center items-center px-4 py-24">

      {/* Main Card */}
      <div className="w-full max-w-4xl bg-white dark:bg-[#0d151c] rounded-2xl shadow-2xl flex overflow-hidden border border-slate-200 dark:border-slate-800">

        {/* LEFT PANEL (Hidden on Mobile, Visible on Desktop) */}
        <div className="hidden lg:flex w-1/2 relative bg-[#0f6d61] text-white items-center justify-center">
          <div className="absolute inset-0 bg-[#0a5e54] rounded-r-[200px]" />
          <div className="relative z-10 text-center px-10">
            <div className="text-2xl font-bold mb-6">Arcelor Api-Portal</div>
            <h2 className="text-3xl font-semibold mb-2">Architect the Future of Finance</h2>
            <p className="text-sm opacity-90 mb-8">
              To stay connected with us please login with your personal info
            </p>
            <Link to="/signin">
              <button className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-[#0a5e54] transition font-semibold">
                SIGN IN
              </button>
            </Link>
            <div className="text-xs mt-12 opacity-70 tracking-widest">DESIGN BY | MANTHAN</div>
          </div>
        </div>

        {/* RIGHT PANEL (Form) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white mb-2">Create Account</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Sign up to continue</p>

            {message && (
              <div className={`text-sm text-center mb-6 font-semibold p-3 rounded-lg ${message.includes('Yay') ? 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400' : 'bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400'}`}>
                {message}
              </div>
            )}

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSignup}>

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#111c24] border border-transparent dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0a5e54] dark:focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#111c24] border border-transparent dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0a5e54] dark:focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <div className="relative mt-1.5">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#111c24] border border-transparent dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0a5e54] dark:focus:ring-teal-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm Password</label>
                <div className="relative mt-1.5">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#111c24] border border-transparent dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0a5e54] dark:focus:ring-teal-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                className="w-full bg-[#0a5e54] text-white py-3 rounded-xl mt-2 font-bold hover:bg-[#084d46] transition-all shadow-lg shadow-[#0a5e54]/20"
              >
                SIGN UP
              </button>

              <p className="text-sm text-slate-500 dark:text-slate-400 text-center pt-2">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#0a5e54] dark:text-teal-400 font-bold cursor-pointer hover:underline">
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
