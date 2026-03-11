import React, { useState, useEffect, useMemo } from 'react';
import { Search, ChevronRight, ArrowUp, FileJson, Clock, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SandboxNavbar from '../sandbox/SandboxNavbar';

// 1. We still import your hardcoded data so you don't lose your "soon" items
import { apiList as staticApiList } from '../sandbox/apiData';

const Sandbox = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 2. NEW: State to hold ALL our APIs (Static + Database)
  const [allApis, setAllApis] = useState(staticApiList);
  const [isLoadingDb, setIsLoadingDb] = useState(true);

  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  // 3. NEW: The helper robot that fetches from your Database
  useEffect(() => {
    const fetchDatabaseApis = async () => {
      try {
        // Call the GET /all route you built in the backend!
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/apis/all`);
        
        if (response.ok) {
          const dbData = await response.json();
          
          // We need to shape the database data to match your UI's expected format
          const formattedDbApis = dbData.map((dbApi) => ({
            id: dbApi._id, // MongoDB uses _id
            name: dbApi.title, // Your DB calls it 'title', UI calls it 'name'
            path: `/api/${dbApi.slug}`, // Create the URL using the slug you typed in AddApi
            status: 'active' 
          }));

          // Mix the hardcoded ones and the new database ones together!
          setAllApis([...staticApiList, ...formattedDbApis]);
        }
      } catch (error) {
        console.error("Oops! Could not fetch APIs from the database:", error);
      } finally {
        setIsLoadingDb(false);
      }
    };

    fetchDatabaseApis();
  }, []); // The empty array [] means "only run this once when the page loads"

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLetter = (letter) => {
    const section = document.getElementById(`section-${letter}`);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // 4. UPDATED: We now filter "allApis" instead of just the static "apiList"
  const groupedAPIs = useMemo(() => {
    const filtered = allApis.filter((api) => 
      api.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.reduce((acc, api) => {
      const firstLetter = api.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(api);
      return acc;
    }, {});
  }, [searchQuery, allApis]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-700 pt-20 md:pt-24">
      
      <SandboxNavbar />

      <div className="flex-1 overflow-y-auto relative w-full">
        
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 pt-6 pb-4 px-4 md:px-12 shadow-sm">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-6xl mx-auto mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1 flex items-center gap-3">
                API Directory 
                {isLoadingDb && <Loader2 className="animate-spin text-[#025f61]" size={20} />}
              </h1>
              <p className="text-slate-500 text-sm">Browse endpoints and integrations.</p>
            </div>
            
            <div className="relative w-full md:w-80 group">
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

          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 md:gap-0 max-w-6xl mx-auto">
            {letters.map((letter) => {
              const hasItems = groupedAPIs[letter] && groupedAPIs[letter].length > 0;
              return (
                <button
                  key={letter}
                  onClick={() => scrollToLetter(letter)}
                  disabled={!hasItems}
                  className={`w-8 h-8 md:w-7 md:h-7 flex items-center justify-center rounded text-[13px] transition-all duration-200 
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

        <div className="px-4 md:px-12 py-8 max-w-6xl mx-auto">
          
          {Object.keys(groupedAPIs).length === 0 && !isLoadingDb && (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">No APIs found matching "{searchQuery}"</p>
            </div>
          )}

          {letters.map((letter) => {
            const apisForThisLetter = groupedAPIs[letter];
            if (!apisForThisLetter || apisForThisLetter.length === 0) return null;

            return (
              <div key={letter} id={`section-${letter}`} className="mb-12 scroll-mt-48 md:scroll-mt-40">
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-2xl font-bold text-[#025f61]">{letter}</h2>
                  <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                  {apisForThisLetter.map((api) => (
                    api.status === 'active' ? (
                      
                      <Link
                        key={api.id}
                        to={api.path}
                        className="w-full group flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-xl hover:border-[#025f61] hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 overflow-hidden pr-2">
                          <FileJson size={16} className="text-[#025f61]/60 group-hover:text-[#025f61] shrink-0" />
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-[#025f61] truncate">
                            {api.name}
                          </span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-[#025f61] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>

                    ) : (

                      <div 
                        key={api.id} 
                        className="w-full flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 border-dashed rounded-xl opacity-80 cursor-not-allowed"
                      >
                        <div className="flex items-center gap-2 overflow-hidden pr-2">
                          <Clock size={16} className="text-slate-400 shrink-0" />
                          <span className="text-sm font-medium text-slate-500 truncate">
                            {api.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200 px-2 py-1 rounded shrink-0">
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

        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 rounded-full bg-slate-800 text-white shadow-lg hover:bg-[#025f61] hover:-translate-y-1 transition-all duration-300 z-50 ${
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