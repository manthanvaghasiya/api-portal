import React from 'react';
import { ArrowRight, Layers, Briefcase, CreditCard, Landmark, Send, Globe, Building2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AvailableAPIs = () => {
  const navigate = useNavigate();

  const apiList = [
    { id: 1, title: 'Building Blocks', description: 'Building Blocks APIs provide you with the most essential APIs you require to integrate with number of services of the bank. Run checks and crosses using out fundamental APIs such as CIBIL score check, PAN card information.', icon: Layers, link: '/api/building-blocks' },
    { id: 2, title: 'Business Banking', description: "Empower your corporate's banking with seamless APIs which enable your corporation to make Efficient Transactions, Expeditious Cash Deposits, Smart Reconciliation, and Personalised Management Systems.", icon: Briefcase, link: '/api/business-banking' },
    { id: 3, title: 'Loans and Cards', description: 'Explore, develop, and integrate innovative solutions for various loan products (AL, HL, Loan Top-up, Loan Management) and Credit Card products to cater to your prospects, existing, and upcoming customers.', icon: CreditCard, link: '/api/loans-cards' },
    { id: 4, title: 'Accounts and Deposits', description: 'Empower your customers to invest and do banking with you by integrating with umpteen services in the domain of Savings (Savings Accounts, Corporate Account) and deposits (Fixed Deposits, Recurrent Deposits).', icon: Landmark, link: '/api/accounts-deposits' },
    { id: 5, title: 'Payments & UPI', description: 'Find the most sought after APIs in the industry to introduce payment services tailor made to serve your needs. Multitude of payment services to integrate your payment services to the outside world.', icon: Send, link: '/api/payments-upi' },
    { id: 6, title: 'Trade Service', description: 'Incorporate remittances and bank guarantees APIs to make your trade and business easy with our latest offerings tailormade as per the latest requirements of the market.', icon: Globe, link: '/api/trade-service' },
    { id: 7, title: 'Corporate API Suite', description: 'We bring to you corporate API suite a bouquet of APIs selected specially to cater to the evolving needs of corporate clients. We have come up with this assortment of APIs after carefuly studying the needs and journey of the corporates.', icon: Building2, link: '/api/corporate-suite' },
  ];

  return (
    // 🌟 Background changed to a soft slate-100 instead of bright slate-50!
    <div className="relative py-20 lg:py-24 bg-slate-100 dark:bg-[#011112] transition-colors duration-500 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Softened the grid lines color so it's not harsh */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#025f610a_1px,transparent_1px),linear-gradient(to_bottom,#025f610a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
         
         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[600px] rounded-full bg-[#025f61] opacity-[0.05] dark:opacity-20 blur-[100px]"></div>
         <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-teal-400 opacity-[0.05] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-[#025f61]/10 text-[#025f61] dark:text-teal-300 font-bold text-[13px] mb-6 border border-slate-200/80 dark:border-[#025f61]/30 shadow-sm backdrop-blur-sm">
            <Layers size={16} /> API Collection
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025f61] to-teal-500">Available APIs</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover our powerful collection of endpoints designed to help you build financial tools faster, safer, and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {apiList.map((api, index) => {
            const Icon = api.icon;
            const isLastOddItem = index === apiList.length - 1 && apiList.length % 2 !== 0 && apiList.length % 3 !== 0;

            return (
              <div 
                key={api.id} 
                onClick={() => navigate(api.link)}
                // 🌟 Cards are now frosted glass (bg-white/60) with a beautiful white border!
                className={`group cursor-pointer relative bg-white/60 backdrop-blur-xl dark:bg-[#0a1f20] p-6 rounded-2xl border border-white/80 dark:border-teal-900/30 shadow-sm shadow-slate-200/40 hover:shadow-xl hover:-translate-y-2 hover:bg-[#025f61] dark:hover:bg-[#025f61] transition-all duration-500 flex flex-col justify-center items-center overflow-hidden ${isLastOddItem ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
                style={{ minHeight: '350px' }} 
              >
                
                <div className="flex flex-col items-center text-center w-full transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-white/80 dark:bg-[#112a2b] border border-slate-200/60 dark:border-[#025f61]/40 flex items-center justify-center mb-4 text-[#025f61] dark:text-teal-400 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/30 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-white group-hover:text-white transition-colors duration-500 whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {api.title}
                  </h3>
                </div>
                  
                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[250px] group-hover:opacity-100 transition-all duration-700 ease-in-out w-full flex flex-col">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-500 text-center mt-3">
                    {api.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5 group-hover:border-white/20 flex items-center justify-center text-[#025f61] dark:text-teal-400 group-hover:text-white font-semibold text-sm transition-colors duration-500">
                    Explore Integration 
                    <ChevronRight size={16} className="ml-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 delay-100" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center w-full">
           <button 
             onClick={() => navigate('/explore')}
             className="group flex items-center gap-3 px-8 py-4 bg-[#025f61] text-white rounded-xl font-semibold text-lg hover:bg-[#014849] transition-all duration-300 shadow-md shadow-[#025f61]/20 hover:shadow-xl hover:-translate-y-1"
           >
             BROWSE ALL APIs
             <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </div>
  );
};

export default AvailableAPIs;