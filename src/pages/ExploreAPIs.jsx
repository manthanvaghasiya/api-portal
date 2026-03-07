import React from 'react';
import { CreditCard, Wallet, Users, ArrowRightLeft, ShieldCheck } from 'lucide-react';

const ExploreAPIs = () => {
  const apis = [
    { title: 'Payments API', icon: <CreditCard size={32} />, desc: 'Initiate and track payments securely across multiple channels.' },
    { title: 'Account API', icon: <Wallet size={32} />, desc: 'Access real-time balance and transaction history for linked accounts.' },
    { title: 'UPI API', icon: <ArrowRightLeft size={32} />, desc: 'Integrate unified payment interface for instant money transfers.' },
    { title: 'KYC API', icon: <ShieldCheck size={32} />, desc: 'Verify customer identity digitally with our secure KYC endpoints.' },
    { title: 'Corporate API', icon: <Users size={32} />, desc: 'Manage bulk payouts and corporate financial operations.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-light text-slate-800 mb-2">Explore <span className="font-bold">APIs</span></h1>
      <p className="text-slate-500 mb-12">Discover our robust suite of financial APIs designed for enterprise scale.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apis.map((api, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all group cursor-pointer">
            <div className="text-[#b91c1c] bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {api.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{api.title}</h3>
            <p className="text-slate-500 mb-6 text-sm leading-relaxed">{api.desc}</p>
            <button className="text-[#b91c1c] font-semibold text-sm hover:text-red-800 flex items-center gap-1">
              View Documentation <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreAPIs;