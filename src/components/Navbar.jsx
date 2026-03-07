import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Sun, Moon } from 'lucide-react';

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

        {/* RIGHT SIDE: The Controls & Auth Buttons */}
        <div className="flex items-center space-x-3 pr-2">
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 mr-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-yellow-400 hover:scale-110 hover:text-[#025f61] hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-white/5"
            title="Toggle Light/Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/signin" className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-white hover:text-[#025f61] dark:hover:text-teal-200 transition-colors">
            Sign In
          </Link>
          
          <Link to="/signup" className="group flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white dark:text-[#025f61] bg-[#025f61] dark:bg-white rounded-full hover:bg-[#014849] dark:hover:bg-slate-100 hover:scale-105 hover:shadow-[0_8px_20px_-6px_rgba(2,95,97,0.6)] dark:hover:shadow-[0_8px_20px_-6px_rgba(255,255,255,0.4)] transition-all duration-300">
            
            Sign Up
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;