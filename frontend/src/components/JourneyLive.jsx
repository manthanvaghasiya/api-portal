import React from 'react';
import { Wrench, MonitorDot, Rocket, ArrowRight, ArrowDown } from 'lucide-react';

const JourneyLive = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#011112] overflow-hidden border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* 1. HEADER AREA */}
        <div className="text-center mb-16 lg:mb-24 px-4">
          <h2 className="text-3xl lg:text-4xl font-light text-slate-800 dark:text-white mb-3 lg:mb-4">
            Journey to <span className="font-bold text-[#025f61] dark:text-teal-400">Go Live</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base lg:text-lg">
            Three simple phases to integrate, test, and launch your application.
          </p>
        </div>

        {/* 2. THE MAGIC HIGHWAY (The Journey Track) */}
        {/* Made responsive: flex-col on mobile, flex-row on desktop */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start max-w-5xl mx-auto z-10 gap-8 lg:gap-0">

          {/* THE GLOWING LINE: Horizontal on desktop, Hidden on mobile (we use arrows instead) */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] w-[80%] h-1 bg-gradient-to-r from-orange-200 via-blue-200 to-red-200 dark:from-orange-500/20 dark:via-blue-500/20 dark:to-red-500/20 -z-10 rounded-full"></div>

          {/* STEP 1: Sandbox */}
          <div className="flex flex-col items-center w-full max-w-[280px] lg:w-64 group cursor-pointer">
            {/* The Orb */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white dark:bg-[#0d151c] rounded-full border-4 border-orange-50 dark:border-orange-500/10 flex items-center justify-center shadow-xl shadow-orange-900/5 dark:shadow-none group-hover:scale-110 group-hover:border-orange-500 dark:group-hover:border-orange-500 transition-all duration-300 mb-4 lg:mb-6">
              <Wrench size={32} className="text-orange-500 w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
            </div>
            {/* The Text */}
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white mb-2 lg:mb-3 tracking-wide uppercase group-hover:text-orange-500 transition-colors">Sandbox</h3>
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4 lg:px-0">
              Sign up for our Sandbox environment to start your journey and test safely.
            </p>
          </div>

          {/* Arrow pointing to the next step (Down on mobile, Right on desktop) */}
          <div className="text-slate-300 dark:text-slate-700 lg:mt-[36px]">
            <ArrowDown className="block lg:hidden" size={24} />
            <ArrowRight className="hidden lg:block" size={24} />
          </div>

          {/* STEP 2: UAT */}
          <div className="flex flex-col items-center w-full max-w-[280px] lg:w-64 group cursor-pointer">
            {/* The Orb */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white dark:bg-[#0d151c] rounded-full border-4 border-blue-50 dark:border-blue-500/10 flex items-center justify-center shadow-xl shadow-blue-900/5 dark:shadow-none group-hover:scale-110 group-hover:border-[#005587] dark:group-hover:border-[#005587] transition-all duration-300 mb-4 lg:mb-6">
              <MonitorDot size={32} className="text-[#005587] w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
            </div>
            {/* The Text */}
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white mb-2 lg:mb-3 tracking-wide uppercase group-hover:text-[#005587] transition-colors">UAT</h3>
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4 lg:px-0">
              Upgrade to UAT for end-to-end real-time testing after posting your NDA with us.
            </p>
          </div>

          {/* Arrow pointing to the next step (Down on mobile, Right on desktop) */}
          <div className="text-slate-300 dark:text-slate-700 lg:mt-[36px]">
            <ArrowDown className="block lg:hidden" size={24} />
            <ArrowRight className="hidden lg:block" size={24} />
          </div>

          {/* STEP 3: Production */}
          <div className="flex flex-col items-center w-full max-w-[280px] lg:w-64 group cursor-pointer">
            {/* The Orb */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white dark:bg-[#0d151c] rounded-full border-4 border-red-50 dark:border-red-500/10 flex items-center justify-center shadow-xl shadow-red-900/5 dark:shadow-none group-hover:scale-110 group-hover:border-[#b91c1c] dark:group-hover:border-[#b91c1c] transition-all duration-300 mb-4 lg:mb-6">
              <Rocket size={32} className="text-[#b91c1c] w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
            </div>
            {/* The Text */}
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white mb-2 lg:mb-3 tracking-wide uppercase group-hover:text-[#b91c1c] transition-colors">Production</h3>
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4 lg:px-0">
              Go-live with seamless integration to our secure production environment.
            </p>
          </div>

        </div>

        {/* 3. THE DISCLAIMER BOX */}
        {/* Adjusted padding for mobile */}
        <div className="mt-16 lg:mt-24 text-center bg-slate-50 dark:bg-[#0a1718] py-4 px-4 lg:px-6 rounded-lg border border-slate-100 dark:border-white/5 max-w-4xl mx-auto">
          <p className="text-[10px] lg:text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
            *Disclaimer : Access to UAT & Production environment is subject to business approvals, NDA and other agreements, and is at the sole discretion of the organization.
          </p>
        </div>

      </div>
    </section>
  );
};

export default JourneyLive;
