import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Explore APIs', path: '/explore' },
        { name: 'Sandbox', path: '/sandbox' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Documentation', path: '/docs' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers', badge: 'Hiring' },
        { name: 'Journal', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Security', path: '/security' }
      ]
    }
  ];

  return (
    <footer className="w-full bg-white dark:bg-[#011112] transition-colors duration-300">
      
      {/* WRAPPER FOR MAX WIDTH */}
      <div className="max-w-7xl mx-auto">
        
        {/* MIDDLE TIER: NAVIGATION GRID */}
        {/* Made responsive: 1 column on mobile, 12 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 border-t border-slate-200 dark:border-white/10 p-6 lg:p-16 mb-8 lg:mb-16">
          
          {/* Logo and Pitch */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-4">
            <Link to="/" className="flex items-center group gap-3">
              <div className="bg-slate-100 dark:bg-white/10 rounded-full group-hover:bg-slate-200 dark:group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                  <img className="h-8 lg:h-10 w-auto p-1" src="/logo.png" alt="SaaS Logo" />
              </div>
              <span className="font-bold text-lg lg:text-xl tracking-tight text-slate-800 dark:text-white transition-colors">
                Arcelor Api-Portal
              </span>
            </Link>
            
            <p className="text-base lg:text-lg text-slate-600 dark:text-teal-50/50 leading-relaxed max-w-sm font-medium">
              Building the financial rails for the next generation of software. Secure, scalable, and developer-first.
            </p>
          </div>
          
          {/* Links Grid */}
          <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4 lg:gap-6">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#025f61] dark:text-teal-500">
                  {section.title}
                </h4>
                <ul className="space-y-3 lg:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="group flex items-center text-sm lg:text-[15px] font-semibold text-slate-500 hover:text-[#025f61] dark:text-teal-50/40 dark:hover:text-white transition-colors"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="ml-2 px-2 py-0.5 text-[9px] bg-slate-100 text-[#025f61] border border-slate-200 dark:bg-[#025f61]/20 dark:text-teal-300 dark:border-[#025f61]/30 rounded-md">
                            {link.badge}
                          </span>
                        )}
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#025f61] dark:text-teal-400 hidden lg:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM TIER: COMPLIANCE & LOCALE */}
        {/* Made responsive: Stacks vertically on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-6 lg:px-16 pb-12 border-t border-slate-200 dark:border-white/5 pt-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <p className="text-xs font-medium text-slate-500 dark:text-teal-50/40">
              © {currentYear} Arcelor Api-Portal Inc.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-teal-50/40 cursor-pointer dark:hover:text-white transition-colors">
              <Globe size={14} />
              <span>United States (English)</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <span className="text-[10px] text-slate-400 dark:text-teal-50/20 font-mono tracking-widest bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full">
              SECURE PORTAL V.2.4.0
            </span>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
