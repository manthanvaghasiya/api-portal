import React, { useState, useEffect, useMemo } from 'react';
import { Search, ChevronRight, ArrowUp, FileJson, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SandboxNavbar from '../sandbox/SandboxNavbar';

// IMPORT THE DATA FROM YOUR NEW FILE
import { apiList } from '../sandbox/apiData';

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

  // SEARCH & GROUPING LOGIC
  const groupedAPIs = useMemo(() => {
    const filtered = apiList.filter((api) => 
      api.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.reduce((acc, api) => {
      const firstLetter = api.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(api);
      return acc;
    }, {});
  }, [searchQuery]);

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
            {letters.map((letter) => {
              const hasItems = groupedAPIs[letter] && groupedAPIs[letter].length > 0;
              return (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  disabled={!hasItems}
                  className={`w-7 h-7 flex items-center justify-center rounded text-[13px] transition-all duration-200 
                    ${hasItems 
                      ? 'text-slate-500 font-semibold hover:bg-[#025f61] hover:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#025f61]/50' 
                      : 'text-slate-300 cursor-not-allowed opacity-50'}`}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        </div>

        {/* API DIRECTORY LIST */}
        <div className="px-8 md:px-12 py-8 max-w-6xl mx-auto">
          
          {/* Empty state for search */}
          {Object.keys(groupedAPIs).length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">No APIs found matching "{searchQuery}"</p>
            </div>
          )}

          {/* DYNAMIC LISTING */}
          {letters.map((letter) => {
            const apisForThisLetter = groupedAPIs[letter];

            if (!apisForThisLetter || apisForThisLetter.length === 0) return null;

            return (
              <div key={letter} id={`section-${letter}`} className="mb-12 scroll-mt-40">
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-2xl font-bold text-[#025f61]">{letter}</h2>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                {/* YOUR EXACT GRID DESIGN */}
                <div className="grid grid-cols-3 gap-4">
                  
                  {apisForThisLetter.map((api) => (
                    api.status === 'active' ? (
                      
                      /* ACTIVE API CARD */
                      <Link
                        key={api.id}
                        to={api.path}
                        target="_blank"
                        rel="noopener noreferrer"
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

                    ) : (

                      /* COMING SOON API CARD */
                      <div 
                        key={api.id} 
                        className="w-full sm:w-72 flex items-center justify-between p-3 bg-slate-50 border border-slate-200 border-dashed rounded-xl opacity-80 cursor-not-allowed"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Clock size={14} className="text-slate-400 shrink-0" />
                          <span className="text-[13px] font-medium text-slate-500 truncate">
                            {api.name}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200 px-1.5 py-0.5 rounded shrink-0">
                          Soon
                        </span>
                      </div>

                    )
                  ))}
                </div>
              </div>
            );
          })}
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