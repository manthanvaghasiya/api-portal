import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: "What is API Banking?", a: "API Banking allows your business software to communicate directly with our banking systems securely, enabling automated payments, balance checks, and more." },
    { q: "How to access Sandbox?", a: "Create a free developer account, navigate to your dashboard, and generate your Sandbox API keys to start testing immediately." },
    { q: "How to get Production Access?", a: "After successful UAT testing, you must submit business documents, sign an NDA, and go through our security approval process to receive production keys." },
    { q: "How to integrate APIs?", a: "We provide comprehensive documentation, Postman collections, and SDKs in major languages to make integration seamless for your development team." }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 pt-30">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{faq.q}</h3>
            <p className="text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;