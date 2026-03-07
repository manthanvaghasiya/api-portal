import React, { useState } from 'react';
import { LayoutDashboard, ChevronRight, UserPlus, Box, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreAPIs = () => {
  // State to track which menu item is selected
  const [activeCategory, setActiveCategory] = useState('Introduction');

  // The list of categories from your text
  const categories = [
    'Introduction',
    'Security',
    'Building Blocks',
    'Loans and Cards',
    'Payments',
    'Accounts and Deposits',
    'Business Banking',
    'Corporate API Suite',
    'Trade APIs',
    'BAAS'
  ];

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-20 bg-slate-50 dark:bg-[#011112] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* =========================================
            LEFT SIDEBAR (Navigation)
            ========================================= */}
        <div className="w-full lg:w-72 shrink-0 pt-4">
          
          {/* Dashboard Button */}
         

          {/* Categories Menu */}
          <div className="bg-white dark:bg-[#0d151c] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-3 lg:p-4">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 px-3 hidden lg:block">
              Categories
            </h3>
            
            {/* Mobile View: Horizontal Scroll / Laptop View: Vertical List */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible hide-scrollbar pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-[#025f61]/10 dark:bg-[#025f61]/20 text-[#025f61] dark:text-teal-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {category}
                  {activeCategory === category && <ChevronRight size={16} className="hidden lg:block" />}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Link to="/sandbox" className="w-full flex items-center justify-between bg-[#025f61] hover:bg-[#014849] text-white px-5 py-4 rounded-xl font-bold transition-all shadow-md mb-6 group">
            <div className="flex items-center gap-3">
              <LayoutDashboard size={20} />
              <span className="tracking-wide">VIEW ALL APIs</span>
            </div>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

        {/* =========================================
            RIGHT SIDE (Main Content Area)
            ========================================= */}
        <div className="flex-1">
          <div className="bg-white dark:bg-[#0d151c] rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 lg:p-10 min-h-[600px]">
            
            {/* Show Introduction Content Only if 'Introduction' is selected */}
            {activeCategory === 'Introduction' ? (
              <div className="animate-in fade-in duration-500">
                
                {/* Header Text */}
                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                  Welcome to  Bank API Banking Portal!
                </h1>
                <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
                  Equipped with our services inventory and open API platform, we provide you the chance to reach, test and use ICICI Bank’s digital services. Using these, you now have the power of ICICI Bank supporting you to develop the next generation of applications. Let’s look how you can do it;
                </p>

                {/* Getting Started Section */}
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#025f61] rounded-full"></div>
                  Getting Started
                </h2>

                {/* The 3 Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12">
                  <div className="bg-slate-50 dark:bg-[#111c24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
                      <UserPlus size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Sign up</h3>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-[#111c24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4">
                      <Box size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Select API</h3>
                  </div>

                  <div className="bg-slate-50 dark:bg-[#111c24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                      <PlayCircle size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Test it Out</h3>
                  </div>
                </div>

                {/* Step-by-Step Instructions */}
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-6 relative z-10 bg-white dark:bg-[#0d151c] inline-block pr-4">
                    If you already have an account, then sign in and jump to step 2. Else follow the steps to create an account:
                  </p>

                  {/* Step 1 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#025f61] text-white flex items-center justify-center font-bold text-lg shadow-md z-10 relative mt-1">
                      1
                    </div>
                    <div className="bg-slate-50 dark:bg-[#111c24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 w-full">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Go to our sign-up page.</h4>
                      <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> a. Enter your Credentials.</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> b. Verify your Mobile Number</li>
                        <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500" /> c. Create Username and Password</li>
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#025f61] text-white flex items-center justify-center font-bold text-lg shadow-md z-10 relative mt-1">
                      2
                    </div>
                    <div className="bg-slate-50 dark:bg-[#111c24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 w-full">
                      <p className="text-slate-600 dark:text-slate-300 font-medium">
                        Complete the registration by entering your details and create an account.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start gap-6">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#025f61] text-white flex items-center justify-center font-bold text-lg shadow-md z-10 relative mt-1">
                      3
                    </div>
                    <div className="bg-slate-50 dark:bg-[#111c24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 w-full">
                      <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        When authorized, an email will be sent to your registered email-id with a link to activate your account by logging in. You now have access to your dashboard. From here you can create and configure your apps.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              // Empty State for other categories (You can fill these in later!)
              <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in pt-20">
                <Box size={48} className="text-slate-300 dark:text-slate-700 mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {activeCategory} APIs
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                  Documentation and endpoints for {activeCategory} will appear here. Select "Introduction" to see the getting started guide.
                </p>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExploreAPIs;