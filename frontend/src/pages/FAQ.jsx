import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  // 1. Our list of questions and answers
  const faqData = [
    {
      question: "How do I sign up for a developer account on the Arcelor development portal?",
      answer: "On the developer portal, click the Sign up button at the right top corner. The portal is a self-service tool that will guide you through account creation. After creating an account and accepting the Arcelor API Portal and Services Agreement, you can start developing apps."
    },
    {
      question: "Who is this for?",
      answer: "We are currently publishing this for new developers or existing partners with a new initiative. If you do not have an integration with Arcelor, use these APIs to get started."
    },
    {
      question: "Do I need to create a Developer Account to use your APIs?",
      answer: "You can sign up for a new Developer account and create an API key on your Developer Console. For more information, see our Documentation page. If you are an Enterprise Developer interested in adding or updating an application, please contact your Account Manager before creating an API key. If you are not able to access your Developer Console, contact your Account Manager."
    },
    {
      question: "What is an API?",
      answer: "API is the abbreviation for Application Programming Interface. An API allows a third party application to use a common set of services via a defined interface."
    },
    {
      question: "How do I obtain API keys?",
      answer: "Simply create an account on the developer portal and then create one or more applications. Each application will get its own API key. Once your application is ready to go live you can request for an account plan upgrade via your Developer Console."
    },
    {
      question: "What is OAuth?",
      answer: "OAuth is an authentication protocol. For more information, please visit oauth.net."
    },
    {
      question: "What is a REST API?",
      answer: "REST (Representational State Transfer) is a simple stateless architecture i.e. each operation is entirely defined by the information sent to and received from the service. When a web service uses this architecture, it is known as a REST API."
    },
    {
      question: "What are the Organisation Administrator’s responsibilities?",
      answer: "The Organisation Administrator is your company’s representative for the Arcelor API Portal. This person has overall responsibility for the account, and has access to all the services and functions available on the site. Main responsibilities include: 1) Adding, deleting and managing your organisation’s developers 2) Adding, deleting and managing applications 3) Editing organisational details 4) Requesting API keys and authentication 5) Changing API Plans or Account Plans 6) Checking API usage and analytics. The Organisation Administrator is Arcelor’s first point of contact."
    },
    {
      question: "How do I add a user to my organization’s developer account?",
      answer: "Only users with the enterprise administrator role can add users. You can manage your users and permissions at the User Management page."
    },
    {
      question: "How do I handle any service errors that are returned?",
      answer: "You will see details of various error responses within the API specifications. The Error description field in a response is meant to detail a message for the user. Refer to the error code information which details what the error code means and how this error code should be handled."
    },
    {
      question: "What is an Account Plan?",
      answer: "An Account Plan is a collection of one or more APIs. Every developer organization has an Account Plan. When a developer registers for a new organization account, the organization is automatically assigned to a ‘Bronze Account Plan’. Using a ‘Bronze Account Plan’ you can only consume ‘Test’ APIs. In order to consume ‘Production’ APIs, you have to upgrade your account plan to a ‘Production Account Plan’."
    },
    {
      question: "What is an API Plan?",
      answer: "An API Plan is a predefined set of rules and quotes of how to consume an API. Currently, we provide ‘Sandbox’ and ‘Production’ API plans. ’Test’ APIs are only available via ‘Sandbox API Plan’ and they are restricted to some quotes which means you will have limited access. On the other hand, ‘Production’ APIs available via ‘Production API Plan’ can be consumed with higher quotes and they process live data."
    },
    {
      question: "Is there a limit to the number of call APIs?",
      answer: "Yes, sandbox APIs are currently restricted to a limited number of calls, according to the API Plan’s context."
    },
    {
      question: "What responsibilities do Developers have?",
      answer: "Developers have to be invited by their Organisation Administrator to join the portal. Once joined, they can access most of the same functions as the Organisation Administrator. There are a few things developers won’t be able to do, and this includes inviting other developers to join, changing API or Account plans, or editing organisational details."
    }
  ];

  // 2. These memories help the page know what is open and what we are searching for!
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 3. This is the superpower that filters questions as you type!
  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // 🌟 Notice the "dark:bg-slate-900". This makes it white in light mode, and dark in dark mode!
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50 dark:bg-[#011617] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        
        {/* Title Area */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="bg-[#025f61]/10 dark:bg-[#025f61]/20 p-4 rounded-full mb-4">
            <HelpCircle size={40} className="text-[#025f61] dark:text-teal-400" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white mb-4 drop-shadow-sm transition-colors">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025f61] to-[#0a5e54] dark:from-teal-400 dark:to-teal-200">help you?</span>
          </h1>
          <p className="text-slate-600 dark:text-teal-100/70 text-lg max-w-2xl transition-colors">
            Search our knowledge base or browse the frequently asked questions below to learn everything about the Arcelor API Portal.
          </p>
        </div>

        {/* The Magic Search Box */}
        <div className="relative mb-12 max-w-2xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 dark:text-teal-500 group-focus-within:text-[#025f61] transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-800 dark:text-white shadow-lg shadow-slate-200/50 dark:shadow-[#025f61]/10 focus:ring-2 focus:ring-[#025f61] focus:border-transparent transition-all outline-none text-lg"
            placeholder="Search for an answer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* If the search finds nothing, show a friendly message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
            <p className="text-slate-500 dark:text-white/60 text-lg">
              Oops! We couldn't find any results for "{searchQuery}". Try another word!
            </p>
          </div>
        )}

        {/* The FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            // We use the original index to keep animations working perfectly during a search
            const actualIndex = faqData.findIndex(f => f.question === faq.question);
            const isOpen = openIndex === actualIndex;

            return (
              <div 
                key={actualIndex} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md ${
                  isOpen 
                    // 🌟 Active Box Colors (Light vs Dark)
                    ? 'bg-teal-50 border-[#025f61]/30 dark:bg-gradient-to-r dark:from-[#025f61]/20 dark:to-[#0a5e54]/10 dark:border-teal-500/30 dark:shadow-[#025f61]/20' 
                    // 🌟 Closed Box Colors (Light vs Dark)
                    : 'bg-white border-slate-200 hover:border-[#025f61]/30 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(actualIndex)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg transition-colors duration-300 ${
                    isOpen 
                      ? 'text-[#025f61] dark:text-teal-900' 
                      : 'text-slate-700 dark:text-white/90'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors duration-300 ml-4 flex-shrink-0 ${
                    isOpen ? 'bg-[#025f61]/10 dark:bg-teal-500/20' : 'bg-slate-100 dark:bg-white/5'
                  }`}>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#025f61] dark:text-teal-400' : 'rotate-0 text-slate-400 dark:text-white/50'
                      }`} 
                      size={20} 
                    />
                  </div>
                </button>

                {/* Answer Box */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-slate-600 dark:text-black leading-relaxed border-t border-slate-500 dark:border-white pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;