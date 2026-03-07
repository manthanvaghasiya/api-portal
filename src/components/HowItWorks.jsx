import React from 'react';
import { ChevronsRight, UserPlus, Code2, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* TOP HEADER: We use 'flex' to put text on the left and the button on the right */}
        <div className="flex justify-between items-end mb-20 border-b border-slate-200 pb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-[#025f61] mb-4 tracking-tight">
              Collaborate, Build, Unleash
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl font-light">
              How it <span className="font-bold text-[#025f61]">Works?</span> Get your developers onboard very quickly. Learn how to incorporate our APIs in just a few easy steps.
            </p>
          </div>
          
          <button className="bg-[#025f61] text-white font-bold py-4 px-10 rounded-lg shadow-lg shadow-red-900/20 hover:bg-red-800 hover:shadow-red-900/40 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm">
            Browse All APIs
          </button>
        </div>

        {/* BOTTOM STEPS: 3 Cards sitting in a perfect straight row */}
        {/* 'flex items-start gap-6' keeps them side-by-side with perfect spacing */}
        <div className="flex items-start justify-between gap-6 relative">
          
          {/* STEP 1: Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border-t-4 border-[#025f61] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            {/* Giant faded number in the background */}
            <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-50 opacity-50 group-hover:scale-110 transition-transform duration-500">1</span>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-blue-50 text-[#025f61] flex items-start justify-center mb-6 shadow-sm">
                <UserPlus size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#025f61] mb-2">Developer Account</h3>
              <p className="text-slate-500 font-medium">Sign up for free and get instant access to your secure dashboard and API keys.</p>
            </div>
          </div>

          {/* ARROW */}
          <ChevronsRight className="text-slate-300 flex-shrink-0" size={48} />

          {/* STEP 2: Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border-t-4 border-[#003366] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            {/* Giant faded number in the background */}
            <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-50 opacity-50 group-hover:scale-110 transition-transform duration-500">2</span>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-blue-50 text-[#003366] flex items-start justify-center mb-6 shadow-sm">
                <Code2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">Select API</h3>
              <p className="text-slate-500 font-medium">Browse our extensive library and choose the exact endpoints your application needs.</p>
            </div>
          </div>

          {/* ARROW */}
          <ChevronsRight className="text-slate-300 flex-shrink-0" size={48} />

          {/* STEP 3: Card */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border-t-4 border-[#b91c1c] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            {/* Giant faded number in the background */}
            <span className="absolute -top-6 -right-4 text-[120px] font-black text-slate-50 opacity-50 group-hover:scale-110 transition-transform duration-500">3</span>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-red-50 text-[#b91c1c] flex items-start justify-center mb-6 shadow-sm">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#b91c1c] mb-2">Test it Out</h3>
              <p className="text-slate-500 font-medium">Use our secure Sandbox option to test your code safely before going live.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;