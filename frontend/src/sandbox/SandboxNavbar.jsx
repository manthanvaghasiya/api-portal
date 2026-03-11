import React from 'react';
import { Link } from 'react-router-dom';

const SandboxNavbar = () => {
  return (
    // 1. MOBILE RESPONSIVE WRAPPER
    <div className="w-full md:w-[280px] h-auto md:min-h-screen flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#011112] transition-colors duration-500">
      
      {/* 2. SPACING */}
      <div className="flex flex-col py-4 md:py-6">
        
        {/* THE WORKING LINK */}
        <Link 
          to="/sandbox" 
          // 3. PADDING & COLORS
          className="px-6 md:px-8 py-3 md:py-4 text-left text-[15px] font-bold text-[#0a5e54] dark:text-teal-400 hover:bg-[#0a5e54]/5 dark:hover:bg-teal-500/10 border-b border-slate-100 dark:border-slate-800 transition-colors flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            {/* The little grid icon */}
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-[#0a5e54] dark:bg-teal-400"></div>
              <div className="w-2 h-2 bg-[#0a5e54] dark:bg-teal-400"></div>
              <div className="w-2 h-2 bg-[#0a5e54] dark:bg-teal-400"></div>
              <div className="w-2 h-2 bg-[#0a5e54] dark:bg-teal-400"></div>
            </div>
            VIEW ALL APIs
          </div>
          <span className="text-[#0a5e54] dark:text-teal-400 text-xl leading-none mb-1">›</span>
        </Link>

      </div>
    </div>
  );
};

export default SandboxNavbar;