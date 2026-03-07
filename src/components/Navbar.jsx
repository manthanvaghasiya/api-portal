import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react'; // We bring in some cool icons!

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // The Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // 1. Tool to move the user to different pages
  const navigate = useNavigate();

  // 2. A switch to open and close the profile menu
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 3. Check the pocket for the ticket and user details
  const token = localStorage.getItem("token");
  // We use JSON.parse to turn the saved text back into an object
  const user = JSON.parse(localStorage.getItem("user")); 

  // 4. The function to throw away the ticket when logging out
  const handleLogout = () => {
    localStorage.removeItem("token"); // Throw away the ticket
    localStorage.removeItem("user");  // Throw away the user details
    setIsProfileOpen(false);          // Close the menu
    navigate("/signin");              // Send them back to the login page
  };

  return (
    // THE WRAPPER: Notice we use pure 'bg-white' and 'bg-[#011617]' here without any /90 or /80!
    <div className={`fixed w-full z-50 flex justify-center transition-all duration-500 ${
      isScrolled 
        ? 'top-0 py-4 bg-white dark:bg-[#011617] shadow-md border-b border-slate-200 dark:border-[#025f61]/50' 
        : 'top-6 px-8'
    }`}>
      
      {/* THE PILL: Also 100% solid colors here for when you are at the very top of the page */}
      <nav className={`w-full max-w-7xl flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'px-4' 
          : 'bg-white dark:bg-[#011617] shadow-xl shadow-slate-200/50 dark:shadow-[#025f61]/40 border border-slate-200 dark:border-[#025f61]/50 rounded-full px-4 py-3'
      }`}>
        
        {/* LEFT SIDE: Logo Area */}
        <div className="flex items-center pl-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-slate-100 dark:bg-white/10 p-2 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                <img className="h-6 w-auto" src="/logo.png" alt="SaaS Logo" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-white transition-colors">Api Portal</span>
          </Link>
        </div>

        {/* MIDDLE: The Inner Links */}
        <div className="flex space-x-1 items-center bg-slate-100 dark:bg-white/5 p-1.5 rounded-full border border-slate-200 dark:border-white/5 shadow-inner transition-colors">
          
          <Link 
            to="/" 
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              isActive('/') 
                ? 'bg-[#025f61] text-white shadow-md shadow-[#025f61]/20 dark:bg-[#025f61] dark:shadow-[#025f61]/40' 
                : 'text-slate-500 hover:text-[#025f61] hover:bg-white dark:text-teal-50/60 dark:hover:text-white dark:hover:bg-white/10'
            }`}
          >
            Home
          </Link>

          <Link 
            to="/partners" 
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              isActive('/partners') 
                ? 'bg-[#025f61] text-white shadow-md shadow-[#025f61]/20 dark:bg-[#025f61] dark:shadow-[#025f61]/40' 
                : 'text-slate-500 hover:text-[#025f61] hover:bg-white dark:text-teal-50/60 dark:hover:text-white dark:hover:bg-white/10'
            }`}
          >
            Strategic Partners
          </Link>

          <Link 
            to="/faq" 
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              isActive('/faq') 
                ? 'bg-[#025f61] text-white shadow-md shadow-[#025f61]/20 dark:bg-[#025f61] dark:shadow-[#025f61]/40' 
                : 'text-slate-500 hover:text-[#025f61] hover:bg-white dark:text-teal-50/60 dark:hover:text-white dark:hover:bg-white/10'
            }`}
          >
            FAQ
          </Link>

          <Link 
            to="/explore" 
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              isActive('/explore') 
                ? 'bg-[#025f61] text-white shadow-md shadow-[#025f61]/20 dark:bg-[#025f61] dark:shadow-[#025f61]/40' 
                : 'text-slate-500 hover:text-[#025f61] hover:bg-white dark:text-teal-50/60 dark:hover:text-white dark:hover:bg-white/10'
            }`}
          >
            Explore APIs
          </Link>

          <Link 
            to="/sandbox" 
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              isActive('/sandbox') 
                ? 'bg-[#025f61] text-white shadow-md shadow-[#025f61]/20 dark:bg-[#025f61] dark:shadow-[#025f61]/40' 
                : 'text-slate-500 hover:text-[#025f61] hover:bg-white dark:text-teal-50/60 dark:hover:text-white dark:hover:bg-white/10'
            }`}
          >
            Sandbox
          </Link>

        </div>

        {/* THE SMART PROFILE SECTION */}
<div className="relative">
  
  {token ? (
    // IF THEY ARE LOGGED IN: Show the Profile Button
    <div>
      <button 
        onClick={() => setIsProfileOpen(!isProfileOpen)} 
        className="flex items-center space-x-2 bg-[#0a5e54] text-white px-4 py-2 rounded-full hover:bg-[#084d46] transition"
      >
        <User size={18} />
        <span>{user?.fullName || "My Profile"}</span>
      </button>

      {/* THE DROPDOWN MENU */}
      {isProfileOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border overflow-hidden z-50">
          
          {/* Show their email at the top */}
          <div className="px-4 py-3 bg-gray-50 border-b text-sm text-gray-600 truncate">
            {user?.email}
          </div>

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 flex items-center space-x-2 transition"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
          
        </div>
      )}
    </div>
  ) : (
    // IF THEY ARE NOT LOGGED IN: Show normal buttons
    <div className="space-x-4">
      <Link to="/signin" className="text-[#0a5e54] font-semibold hover:underline ">
        Sign In
      </Link>
      <Link to="/signup" className="bg-[#0a5e54] text-white px-6 py-2 rounded-full hover:bg-[#084d46] transition">
        Sign Up
      </Link>
    </div>
  )}
  
</div>

      </nav>
    </div>

  );
};

export default Navbar;