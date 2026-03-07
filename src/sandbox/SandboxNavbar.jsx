import React from 'react';
import { Link } from 'react-router-dom';

const SandboxNavbar = () => {
  return (
    // We added 'min-h-screen' here so the sidebar always stretches to the bottom
    <div className="w-[280px] flex-shrink-0 border-r border-slate-200 bg-white min-h-screen">
      <div className="flex flex-col py-6">
        
        
        
        {/* THE WORKING LINK: This will always take you back to the main list */}
        <Link 
          to="/sandbox" 
          className="px-8 py-4 text-left text-[15px] font-bold text-[#025f61] hover:bg-orange-50 border-b border-slate-100 transition-colors flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-[#025f61]"></div>
              <div className="w-2 h-2 bg-[#025f61]"></div>
              <div className="w-2 h-2 bg-[#025f61]"></div>
              <div className="w-2 h-2 bg-[#025f61]"></div>
            </div>
            VIEW ALL APIs
          </div>
          <span className="text-[#025f61]">›</span>
        </Link>

      </div>
    </div>
  );
};

export default SandboxNavbar;