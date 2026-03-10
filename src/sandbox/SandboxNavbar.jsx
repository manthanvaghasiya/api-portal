import React from 'react';
import { Link } from 'react-router-dom';

const SandboxNavbar = () => {
  return (
    // 1. MOBILE RESPONSIVE WRAPPER: 
    // - On phones: It takes full width (w-full), normal height (h-auto), and has a line on the bottom (border-b).
    // - On computers (md:): It is 280px wide, fills the screen height (min-h-screen), and has a line on the right (border-r).
    <div className="w-full md:w-[280px] h-auto md:min-h-screen flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-200 bg-white">
      
      {/* 2. SPACING: Less padding on phones (py-4), more on computers (md:py-6) */}
      <div className="flex flex-col py-4 md:py-6">
        
        {/* THE WORKING LINK: This will always take you back to the main list */}
        <Link 
          to="/sandbox" 
          // 3. PADDING: Adjusted left/right padding so it looks good on tiny screens (px-4) and big screens (md:px-8)
          className="px-6 md:px-8 py-3 md:py-4 text-left text-[15px] font-bold text-[#025f61] hover:bg-[#025f61]/5 border-b border-slate-100 transition-colors flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            {/* The little grid icon */}
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-[#025f61]"></div>
              <div className="w-2 h-2 bg-[#025f61]"></div>
              <div className="w-2 h-2 bg-[#025f61]"></div>
              <div className="w-2 h-2 bg-[#025f61]"></div>
            </div>
            VIEW ALL APIs
          </div>
          <span className="text-[#025f61] text-xl leading-none mb-1">›</span>
        </Link>

      </div>
    </div>
  );
};

export default SandboxNavbar;