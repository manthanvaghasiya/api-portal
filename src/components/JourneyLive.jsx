import React from 'react';
import { Wrench, MonitorDot, Rocket, ArrowRight } from 'lucide-react';

const JourneyLive = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-8 relative">

        {/* 1. HEADER AREA */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-light text-slate-800 mb-4">
            Journey to <span className="font-extrabold text-[#025f61]">Go Live</span>
          </h2>
          {/* We added a soft subtitle here to make it look complete */}
          <p className="text-slate-500 text-lg">
            Three simple phases to integrate, test, and launch your application.
          </p>
        </div>

        {/* 2. THE MAGIC HIGHWAY (The Journey Track) */}
        {/* We use 'flex' to force everything into a perfect horizontal line */}
        <div className="relative flex justify-between items-start max-w-5xl mx-auto z-10">

          {/* THE GLOWING LINE: This sits behind the circles to connect them */}
          {/* We use a gradient color that matches the 3 icons (Orange -> Blue -> Red) */}
          <div className="absolute top-[48px] left-[10%] w-[80%] h-1 bg-gradient-to-r from-orange-200 via-blue-200 to-red-200 -z-10 rounded-full"></div>

          {/* STEP 1: Sandbox */}
          <div className="flex flex-col items-center w-64 group cursor-pointer">
            {/* The Orb */}
            <div className="w-24 h-24 bg-white rounded-full border-4 border-orange-50 flex items-center justify-center shadow-xl shadow-orange-900/5 group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300 mb-6">
              <Wrench size={40} className="text-orange-500" strokeWidth={1.5} />
            </div>
            {/* The Text */}
            <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-wide uppercase group-hover:text-orange-500 transition-colors">Sandbox</h3>
            <p className="text-center text-slate-500 text-sm leading-relaxed">
              Sign up for our Sandbox environment to start your journey and test safely.
            </p>
          </div>

          {/* Arrow pointing to the next step */}
          <div className="mt-[36px] text-slate-300"><ArrowRight size={24}/></div>

          {/* STEP 2: UAT */}
          <div className="flex flex-col items-center w-64 group cursor-pointer">
            {/* The Orb */}
            <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center shadow-xl shadow-blue-900/5 group-hover:scale-110 group-hover:border-[#005587] transition-all duration-300 mb-6">
              <MonitorDot size={40} className="text-[#005587]" strokeWidth={1.5} />
            </div>
            {/* The Text */}
            <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-wide uppercase group-hover:text-[#005587] transition-colors">UAT</h3>
            <p className="text-center text-slate-500 text-sm leading-relaxed">
              Upgrade to UAT for end-to-end real-time testing after posting your NDA with us.
            </p>
          </div>

          {/* Arrow pointing to the next step */}
          <div className="mt-[36px] text-slate-300"><ArrowRight size={24}/></div>

          {/* STEP 3: Production */}
          <div className="flex flex-col items-center w-64 group cursor-pointer">
            {/* The Orb */}
            <div className="w-24 h-24 bg-white rounded-full border-4 border-red-50 flex items-center justify-center shadow-xl shadow-red-900/5 group-hover:scale-110 group-hover:border-[#b91c1c] transition-all duration-300 mb-6">
              <Rocket size={40} className="text-[#b91c1c]" strokeWidth={1.5} />
            </div>
            {/* The Text */}
            <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-wide uppercase group-hover:text-[#b91c1c] transition-colors">Production</h3>
            <p className="text-center text-slate-500 text-sm leading-relaxed">
              Go-live with seamless integration to our secure production environment.
            </p>
          </div>

        </div>

        {/* 3. THE DISCLAIMER BOX */}
        <div className="mt-24 text-center bg-slate-50 py-4 px-6 rounded-lg border border-slate-100 max-w-4xl mx-auto">
          <p className="text-xs text-slate-400 italic">
            *Disclaimer : Access to UAT & Production environment is subject to business approvals, NDA and other agreements, and is at the sole discretion of the organization.
          </p>
        </div>

      </div>
    </section>
  );
};

export default JourneyLive;