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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/apis/all`);
        
        if (response.ok) {
          const dbData = await response.json();
          
          const formattedDbApis = dbData.map((dbApi) => ({
            id: dbApi._id, 
            name: dbApi.title, 
            path: `/api/${dbApi.slug}`, 
            status: 'active' 
          }));

          setAllApis([...staticApiList, ...formattedDbApis]);
        }
      } catch (error) {
        console.error("Oops! Could not fetch APIs from the database:", error);
      } finally {
        setIsLoadingDb(false);
      }
    };

    fetchDatabaseApis();
  }, []); 

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
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 dark:bg-[#011112] font-sans text-slate-700 dark:text-slate-300 pt-20 md:pt-24 transition-colors duration-500">
      
      <SandboxNavbar />

      <div className="flex-1 overflow-y-auto relative w-full">
        
        <div className="sticky top-0 z-30 bg-white/90 dark:bg-[#011112]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 pt-6 pb-4 px-4 md:px-12 shadow-sm transition-colors duration-500">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-6xl mx-auto mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-1 flex items-center gap-3">
                API Directory 
                {isLoadingDb && <Loader2 className="animate-spin text-[#0a5e54] dark:text-teal-400" size={20} />}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Browse endpoints and integrations.</p>
            </div>
            
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-[#0a5e54] dark:group-focus-within:text-teal-400 transition-colors" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search APIs..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-300 dark:hover:border-slate-600 focus:bg-white dark:focus:bg-[#0d151c] focus:border-[#0a5e54] dark:focus:border-teal-400 focus:ring-2 focus:ring-[#0a5e54]/10 dark:focus:ring-teal-400/10 focus:outline-none transition-all text-sm text-slate-900 dark:text-white"
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
                      ? 'text-slate-500 dark:text-slate-400 font-semibold hover:bg-[#0a5e54] dark:hover:bg-teal-500/20 hover:text-white dark:hover:text-teal-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0a5e54]/50 dark:focus:ring-teal-400/50' 
                      : 'text-slate-300 dark:text-slate-700 cursor-not-allowed opacity-50'}`}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        </div>

        <div className="px-4 md:px-12 py-8 max-w-6xl mx-auto">
          
          {Object.keys(groupedAPIs).length === 0 && !isLoadingDb && (
            <div className="text-center py-20 text-slate-500 dark:text-slate-400">
              <p className="text-lg">No APIs found matching "{searchQuery}"</p>
            </div>
          )}

          {letters.map((letter) => {
            const apisForThisLetter = groupedAPIs[letter];
            if (!apisForThisLetter || apisForThisLetter.length === 0) return null;

            return (
              <div key={letter} id={`section-${letter}`} className="mb-12 scroll-mt-48 md:scroll-mt-40">
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-2xl font-bold text-[#0a5e54] dark:text-teal-400">{letter}</h2>
                  <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                  {apisForThisLetter.map((api) => (
                    api.status === 'active' ? (
                      
                      <Link
                        key={api.id}
                        to={api.path}
                        className="w-full group flex items-center justify-between p-3.5 bg-white dark:bg-[#0d151c] border border-slate-200 dark:border-slate-800 rounded-xl hover:border-[#0a5e54] dark:hover:border-teal-400 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 overflow-hidden pr-2">
                          <FileJson size={16} className="text-[#0a5e54]/60 dark:text-teal-400/60 group-hover:text-[#0a5e54] dark:group-hover:text-teal-400 shrink-0" />
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#0a5e54] dark:group-hover:text-teal-400 truncate">
                            {api.name}
                          </span>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-[#0a5e54] dark:group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>

                    ) : (

                      <div 
                        key={api.id} 
                        className="w-full flex items-center justify-between p-3.5 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-800 border-dashed rounded-xl opacity-80 cursor-not-allowed"
                      >
                        <div className="flex items-center gap-2 overflow-hidden pr-2">
                          <Clock size={16} className="text-slate-400 dark:text-slate-500 shrink-0" />
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400 truncate">
                            {api.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded shrink-0">
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
          className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 rounded-full bg-slate-800 dark:bg-teal-500 text-white shadow-lg hover:bg-[#0a5e54] dark:hover:bg-teal-400 hover:-translate-y-1 transition-all duration-300 z-50 ${
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