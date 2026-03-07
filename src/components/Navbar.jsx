import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X } from 'lucide-react'; // Added Menu & X for mobile

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/signin");
  };

  const isActive = (path) => location.pathname === path;

  // Centralized Links for cleaner code
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
        ? 'top-0 py-3 lg:py-4 bg-white dark:bg-[#011617] shadow-md border-b border-slate-200 dark:border-[#025f61]/50' 
        : 'top-4 lg:top-6 px-4 lg:px-8'
    }`}>
      
      <nav className={`w-full max-w-7xl flex justify-between items-center transition-all duration-500 ${
        isScrolled 
          ? 'px-4 lg:px-6' 
          : 'bg-white dark:bg-[#011617] shadow-xl shadow-slate-200/50 dark:shadow-[#025f61]/40 border border-slate-200 dark:border-[#025f61]/50 rounded-2xl lg:rounded-full px-4 lg:px-6 py-3'
      }`}>
        
        {/* LEFT SIDE: Logo Area */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center group gap-2 lg:gap-3">
            <div className="bg-slate-100 dark:bg-white/10 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                <img className="h-8 lg:h-10 w-auto p-1" src="/logo.png" alt="SaaS Logo" />
            </div>
            <span className="font-bold text-lg lg:text-xl tracking-tight text-slate-800 dark:text-white transition-colors">
              Arcelor Api-Portal
            </span>
          </Link>
        </div>

        {/* MIDDLE: Desktop Links */}
        <div className="hidden lg:flex space-x-1 items-center bg-slate-100 dark:bg-white/5 p-1.5 rounded-full border border-slate-200 dark:border-white/5 shadow-inner transition-colors">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive(link.path) 
                  ? 'bg-[#025f61] text-white shadow-md shadow-[#025f61]/20 dark:bg-[#025f61] dark:shadow-[#025f61]/40' 
                  : 'text-slate-500 hover:text-[#025f61] hover:bg-white dark:text-teal-50/60 dark:hover:text-white dark:hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: Profile / Auth (Desktop) */}
        <div className="hidden lg:block relative">
          {token ? (
            <div>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)} 
                className="flex items-center space-x-2 bg-[#0a5e54] text-white px-4 py-2 rounded-full hover:bg-[#084d46] transition"
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
              <Link to="/signin" className="text-[#0a5e54] dark:text-teal-400 font-semibold hover:underline px-4">
                Sign In
              </Link>
              <Link to="/signup" className="bg-[#0a5e54] text-white px-6 py-2 rounded-full hover:bg-[#084d46] transition">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* MOBILE: Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 dark:text-slate-300 hover:text-[#0a5e54] p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 px-4 lg:hidden">
          <div className="bg-white dark:bg-[#011617] rounded-2xl shadow-xl border border-slate-200 dark:border-[#025f61]/50 p-4 flex flex-col gap-2">
            
            {/* Mobile Links */}
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`px-4 py-3 rounded-xl font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#025f61]/10 text-[#025f61] dark:bg-[#025f61]/20 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <hr className="my-2 border-slate-200 dark:border-white/10" />

            {/* Mobile Auth */}
            {token ? (
              <div className="flex flex-col gap-2">
                <div className="px-4 py-2 text-sm text-slate-500 dark:text-slate-400 font-medium truncate">
                  Signed in as {user?.email}
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex justify-center items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-3 rounded-xl font-bold transition-colors"
                >
                  <LogOut size={18} /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link to="/signin" className="w-full text-center text-[#0a5e54] dark:text-teal-400 font-bold py-2">
                  Sign In
                </Link>
                <Link to="/signup" className="w-full text-center bg-[#0a5e54] text-white py-3 rounded-xl font-bold hover:bg-[#084d46] transition">
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
