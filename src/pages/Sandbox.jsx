import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, ArrowUp, FileJson, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SandboxNavbar from '../sandbox/SandboxNavbar';

const Sandbox = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const alphabet = Array.from(Array(26)).map((e, i) => i + 65);
  const letters = alphabet.map((x) => String.fromCharCode(x));

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLetter = (letter) => {
    const section = document.getElementById(`section-${letter}`);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="flex flex-row min-h-screen bg-slate-50 font-sans text-slate-700 pt-24 ">
      {/* SIDEBAR COMPONENT */}
      <SandboxNavbar />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto relative">
        
        {/* STICKY HEADER & SEARCH */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 pt-8 pb-4 px-8 md:px-12 shadow-sm">
          <div className="flex flex-row justify-between items-center max-w-6xl mx-auto mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800 mb-1">
                API Directory
              </h1>
              <p className="text-slate-500 text-sm">Browse 250+ endpoints and integrations.</p>
            </div>
            <div className="relative w-72 md:w-80 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-[#025f61] transition-colors" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search APIs..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 focus:bg-white focus:border-[#025f61] focus:ring-2 focus:ring-[#025f61]/10 focus:outline-none transition-all text-sm"
              />
            </div>
          </div>

          {/* ALPHABET NAVIGATION */}
          <div className="flex flex-row justify-between items-center max-w-6xl mx-auto">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className="w-7 h-7 flex items-center justify-center rounded text-slate-500 font-semibold text-[13px] transition-all duration-200 hover:bg-[#025f61] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#025f61]/50"
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* API DIRECTORY LIST */}
        <div className="px-8 md:px-12 py-8 max-w-6xl mx-auto">
          
          {/* SECTION A */}
          <div id="section-A" className="mb-12 scroll-mt-40">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-2xl font-bold text-[#025f61]">A</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* FLEX WRAP CONTAINER - Stops items from stretching */}
            <div className="grid grid-cols-3 gap-4">
              
              {/* Active API Links */}
              {[
                { name: 'Account Statement', path: '/api/account-statement' },
                { name: 'Add Funds API', path: '/api/add-funds' },
                { name: 'Agent Login', path: '/api/agent-login' }
              ].map((api) => (
                <Link
                  key={api.name}
                  to={api.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  // STRICT WIDTH APPLIED HERE (w-full on mobile, fixed w-72 on larger screens)
                  className="w-full sm:w-72 group flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-[#025f61] hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FileJson size={14} className="text-[#025f61]/60 group-hover:text-[#025f61] shrink-0" />
                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#025f61] truncate">
                      {api.name}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-[#025f61] group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              ))}

              {/* Disabled/Placeholder APIs */}
              {[
                'Account Balance Fetch',
                'Account Creation',
                'Application Status Check'
              ].map((api) => (
                <div 
                  key={api} 
                  // STRICT WIDTH APPLIED HERE
                  className="w-full sm:w-72 flex items-center justify-between p-3 bg-slate-50 border border-slate-200 border-dashed rounded-xl opacity-80 cursor-not-allowed"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Clock size={14} className="text-slate-400 shrink-0" />
                    <span className="text-[13px] font-medium text-slate-500 truncate">
                      {api}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded shrink-0">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION B */}
          <div id="section-B" className="mb-12 scroll-mt-40">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-2xl font-bold text-[#025f61]">B</h2>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* FLEX WRAP CONTAINER */}
            <div className="grid grid-cols-3 gap-4">
              <Link
                to="/api/bank-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-72 group flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-[#025f61] hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileJson size={14} className="text-[#025f61]/60 group-hover:text-[#025f61] shrink-0" />
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#025f61] truncate">
                    Bank Statement API
                  </span>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-[#025f61] group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>

              <div className="w-full sm:w-72 flex items-center justify-between p-3 bg-slate-50 border border-slate-200 border-dashed rounded-xl opacity-80 cursor-not-allowed">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Clock size={14} className="text-slate-400 shrink-0" />
                  <span className="text-[13px] font-medium text-slate-500 truncate">
                    Beneficiary Addition
                  </span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded shrink-0">
                  Soon
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* FLOATING BACK TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full bg-slate-800 text-white shadow-lg hover:bg-[#025f61] hover:-translate-y-1 transition-all duration-300 z-50 ${
            showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </div>
  );
};

export default Sandbox;