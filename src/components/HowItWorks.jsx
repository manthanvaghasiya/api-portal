import React from 'react';
import { ChevronsRight, UserPlus, Code2, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-[#011112] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* TOP HEADER: Stacks on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 border-b border-slate-200 dark:border-white/10 pb-8 lg:pb-10 gap-6 lg:gap-0">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#025f61] dark:text-teal-400 mb-4 tracking-tight">
              Collaborate, Build, Unleash
            </h2>
            <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">
              <span className="font-bold text-[#025f61] dark:text-teal-500">How it Works?</span> Get your developers onboard very quickly. Learn how to incorporate our APIs in just a few easy steps.
            </p>
          </div>
          
          <button className="w-full lg:w-auto bg-[#025f61] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#025f61]/20 hover:bg-[#014849] hover:shadow-[#025f61]/40 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm">
            Browse All APIs
          </button>
        </div>

        {/* BOTTOM STEPS: Stack vertically on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
          
          {/* STEP 1: Card */}
          <div className="w-full lg:flex-1 bg-white dark:bg-[#0d151c] rounded-2xl p-6 lg:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border-t-4 border-[#025f61] dark:border-teal-500 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-transparent dark:border-slate-800 dark:border-t-teal-500">
            <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-50 dark:text-white/5 group-hover:scale-110 transition-transform duration-500">1</span>
            
            <div className="relative z-10">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-teal-50 dark:bg-teal-500/10 text-[#025f61] dark:text-teal-400 flex items-center justify-center mb-6 shadow-sm">
                <UserPlus size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#025f61] dark:text-teal-400 mb-2">Developer Account</h3>
              <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium">Sign up for free and get instant access to your secure dashboard and API keys.</p>
            </div>
          </div>

          {/* ARROW (Rotates down on mobile, right on desktop) */}
          <ChevronsRight className="text-slate-300 dark:text-slate-700 flex-shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0 lg:mt-6" size={48} />

          {/* STEP 2: Card */}
          <div className="w-full lg:flex-1 bg-white dark:bg-[#0d151c] rounded-2xl p-6 lg:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border-t-4 border-[#003366] dark:border-blue-500 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-transparent dark:border-slate-800 dark:border-t-blue-500">
            <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-50 dark:text-white/5 group-hover:scale-110 transition-transform duration-500">2</span>
            
            <div className="relative z-10">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-[#003366] dark:text-blue-400 flex items-center justify-center mb-6 shadow-sm">
                <Code2 size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#003366] dark:text-blue-400 mb-2">Select API</h3>
              <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium">Browse our extensive library and choose the exact endpoints your application needs.</p>
            </div>
          </div>

          {/* ARROW (Rotates down on mobile, right on desktop) */}
          <ChevronsRight className="text-slate-300 dark:text-slate-700 flex-shrink-0 rotate-90 lg:rotate-0 my-2 lg:my-0 lg:mt-6" size={48} />

          {/* STEP 3: Card */}
          <div className="w-full lg:flex-1 bg-white dark:bg-[#0d151c] rounded-2xl p-6 lg:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border-t-4 border-[#b91c1c] dark:border-red-500 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer border border-transparent dark:border-slate-800 dark:border-t-red-500">
            <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-50 dark:text-white/5 group-hover:scale-110 transition-transform duration-500">3</span>
            
            <div className="relative z-10">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-red-50 dark:bg-red-500/10 text-[#b91c1c] dark:text-red-400 flex items-center justify-center mb-6 shadow-sm">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#b91c1c] dark:text-red-400 mb-2">Test it Out</h3>
              <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium">Use our secure Sandbox option to test your code safely before going live.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
