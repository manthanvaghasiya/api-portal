import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X, Sun, Moon } from 'lucide-react'; 

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the pocket for the ticket and user details
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); 

  // The Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Dark Mode Toggle Function
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/signin");
  };

  const isActive = (path) => location.pathname === path;

  // The normal links everyone can see
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Strategic Partners', path: '/partners' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Explore APIs', path: '/explore' },
    { name: 'Sandbox', path: '/sandbox' },
  ];

  return (
    <div className={`fixed w-full z-50 flex justify-center transition-all duration-500 ${
      isScrolled 
        // 🌟 Changed to gradient here!
        ? 'top-0 py-3 lg:py-4 bg-gradient-to-r from-[#025f61] to-[#0a5e54] shadow-md border-b border-white/20' 
        : 'top-4 lg:top-6 px-4 lg:px-8'
    }`}>
      
      <nav className={`w-full max-w-7xl flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'px-4 lg:px-6' 
          // 🌟 Changed to gradient here too!
          : 'bg-gradient-to-r from-[#025f61] to-[#0a5e54] shadow-xl shadow-[#025f61]/40 border border-white/20 rounded-2xl lg:rounded-full px-4 lg:px-6 py-3'
      }`}>
        
        {/* LEFT SIDE: Logo Area */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center group gap-2 lg:gap-3">
            <div >
                <img className="h-8 lg:h-10 w-auto rounded-full" src="/logo.png" alt="Logo" />
            </div>
            {/* 🌟 Made text white */}
            <span className="font-bold text-lg lg:text-xl tracking-tight text-white transition-colors">
              Arcelor Api-Portal
            </span>
          </Link>
        </div>

        {/* MIDDLE: Desktop Links */}
        <div className="hidden lg:flex space-x-1 items-center bg-white/10 p-1.5 rounded-full border border-white/20 shadow-inner transition-colors">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'bg-white text-[#025f61] shadow-md' // Active link is white box with teal text
                    : 'text-white hover:text-white hover:bg-white/20' // Inactive links are white
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* SECRET DESKTOP LINK: Only shows if the user is logged in! */}
          {token && (
            <Link 
              to="/add-api" 
              className={`flex items-center gap-1 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive('/add-api') 
                  ? 'bg-white text-[#025f61] shadow-md' 
                  : 'text-white hover:bg-white/20'
              }`}
            >
               Add API
            </Link>
          )}
        </div>

        {/* RIGHT SIDE: Theme + Profile / Auth (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 relative">
          
          {/* THEME TOGGLE BUTTON */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {token ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)} 
                className="flex items-center space-x-2 bg-white text-[#025f61] px-4 py-2 rounded-full hover:bg-gray-100 transition shadow-md"
              >
                <User size={18} />
                <span>{user?.fullName?.split(" ")[0] || "Profile"}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#0d151c] rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50">
                  <div className="px-4 py-3 bg-gray-50 dark:bg-[#111c24] border-b border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300 truncate">
                    {user?.email}
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center space-x-2 transition"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-x-2">
              <Link to="/signin" className="text-white font-semibold hover:underline px-4">
                Sign In
              </Link>
              <Link to="/signup" className="bg-white text-[#025f61] px-6 py-2 rounded-full hover:bg-gray-100 transition shadow-md">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE: Theme Toggle + Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 px-4 lg:hidden">
          {/* 🌟 Mobile menu now also has the gradient background! */}
          <div className="bg-gradient-to-b from-[#025f61] to-[#0a5e54] rounded-2xl shadow-xl border border-white/20 p-4 flex flex-col gap-2">
            
            {/* Mobile Links */}
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`px-4 py-3 rounded-xl font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-white text-[#025f61]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* SECRET MOBILE LINK: Only shows if logged in! */}
            {token && (
              <Link 
                to="/add-api" 
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold transition-colors ${
                  isActive('/add-api')
                    ? 'bg-white text-[#025f61]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                 Add API
              </Link>
            )}

            <hr className="my-2 border-white/20" />

            {/* Mobile Auth */}
            {token ? (
              <div className="flex flex-col gap-2">
                <div className="px-4 py-2 text-sm text-white/80 font-medium truncate">
                  Signed in as {user?.email}
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex justify-center items-center gap-2 bg-red-500 text-white py-3 rounded-xl font-bold transition-colors hover:bg-red-600"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link to="/signin" className="w-full text-center text-white font-bold py-2 hover:underline">
                  Sign In
                </Link>
                <Link to="/signup" className="w-full text-center bg-white text-[#025f61] py-3 rounded-xl font-bold hover:bg-gray-100 transition">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;