import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Step 1: We use the exact same links from your Navbar so everything matches!
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Strategic Partners', path: '/partners' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Explore APIs', path: '/explore' },
    { name: 'Sandbox', path: '/sandbox' },
  ];

  return (
    // Step 2: The Big Background Box with your green gradient colors
    <footer className="bg-gradient-to-r from-[#025f61] to-[#0a5e54] text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Step 3: We split the footer into 3 columns side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Your Logo and Website Name */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="bg-white/20 p-2 rounded-full inline-block">
              <img className="h-10 w-auto rounded-full" src="/logo.png" alt="Logo" />
            </div>
            <h2 className="font-bold text-xl tracking-tight">Arcelor Api-Portal</h2>
            <p className="text-white/70 text-sm mt-2">
               Building the financial rails for the next generation of software. Secure, scalable, and developer-first.
            </p>
          </div>

          

          {/* Column 2: The Quick Links Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white hover:underline transition-all text-sm font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          

          {/* Column 3: Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4 border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <p className="text-white/80 text-sm mb-2">
              Have questions? We are here to help!
            </p>
            <p className="text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-lg">
              support@arcelorapi.com
            </p>
          </div>

        </div>

        {/* Step 4: The very bottom line with the year */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-xs font-medium">
            © {new Date().getFullYear()} Arcelor Api-Portal. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;