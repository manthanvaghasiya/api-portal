import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Zap, 
  ArrowRight, 
  Mail, 
  Globe, 
  ChevronRight 
} from 'lucide-react';

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
    <footer className="w-full transition-colors duration-300">
        {/* 3. MIDDLE TIER: NAVIGATION GRID */}
        <div className="grid grid-cols-12 gap-4 border-t border-slate-200 dark:border-white/10 p-16 mb-16">
          
          <div className="col-span-4">
          <div className="  ">
          <Link to="/" className="flex items-center  group">
            <div className="bg-slate-100 dark:bg-white/10  rounded-full group-hover:bg-slate-200 dark:group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                <img className="h-10 w-auto" src="/logo.png" alt="SaaS Logo" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white transition-colors">Arcelor Api-Portal</span>
          </Link>
            
            <p className="text-xl text-slate-600 dark:text-teal-50/50 leading-relaxed max-w-md font-medium">
              Building the financial rails for the next generation of software. Secure, scalable, and developer-first.
            </p>

            
          </div>
          </div>
          
          <div className="col-span-7 flex justify-between">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#025f61] dark:text-teal-700">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="group flex items-center text-[15px] font-semibold text-slate-500 hover:text-[#025f61] dark:text-teal-50/40 dark:hover:text-white transition-colors"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="ml-3 px-2 py-0.5 text-[9px] bg-slate-100 text-[#025f61] border border-slate-200 dark:bg-[#025f61]/20 dark:text-teal-300 dark:border-[#025f61]/30 rounded-md">
                            {link.badge}
                          </span>
                        )}
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#025f61] dark:text-teal-400" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. BOTTOM TIER: COMPLIANCE & LOCALE */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-8">
            <p className="text-xs font-medium text-slate-500 dark:text-teal-50/20">
              © {currentYear} Arcelor Api-Portal Inc.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-teal-50/20 cursor-pointer dark:hover:text-teal-50/40 transition-colors">
              <Globe size={14} />
              <span>United States (English)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-slate-400 dark:text-teal-50/10 font-mono tracking-widest">
              SECURE PORTAL V.2.4.0
            </span>
          </div>
        </div>

      
    </footer>
  );
};

export default Footer;