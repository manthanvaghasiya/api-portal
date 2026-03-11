import React, { useState } from 'react';
import { ArrowRight, Terminal, Copy, Check, Zap, Shield, Activity } from 'lucide-react';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('node');

  const handleCopyCode = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const codeSnippets = {
    node: `const response = await fetch('https://api.portal.com/v1/data', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'transaction',
    amount: 5000
  })
});

const data = await response.json();
console.log('Success!', data);`,
    python: `import requests
import json

url = "https://api.portal.com/v1/data"
payload = json.dumps({
  "type": "transaction",
  "amount": 5000
})
headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)`,
    curl: `curl --location 'https://api.portal.com/v1/data' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Bearer YOUR_API_KEY' \\
--data '{
    "type": "transaction",
    "amount": 5000
}'`
  };

  return (
    <div className="relative pt-24 lg:pt-32 pb-32 lg:pb-40 overflow-hidden bg-slate-50 dark:bg-[#011112] transition-colors duration-500 min-h-[95vh] flex items-center">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#025f61]/20 dark:bg-[#025f61]/30 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col z-10">
        
        {/* THIS IS THE MAIN FLEX BOX THAT HOLDS THE TWO SIDES */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 pt-10 pb-24">
          
          {/* =========================================
              LEFT SIDE: Text and Buttons Block
              ========================================= */}
          <div className="w-full lg:w-[48%] text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-[#025f61]/10 text-[#025f61] dark:text-teal-300 font-bold text-[14px] mb-8 border border-slate-200 dark:border-[#025f61]/30 shadow-sm backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#025f61] dark:bg-teal-500"></span>
              </span>
              API v1.0 Platform is Live
            </div>
            
            {/* FIX 1: Reduced text size here from text-7xl to text-5xl/6xl */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1]">
              Architect the <br /> Future of Finance
            </h1>
            
            {/* FIX 1: Slightly reduced paragraph text size */}
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
              Connect your application to our enterprise-grade infrastructure. Instantly deploy secure, scalable APIs built specifically for modern financial workflows.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <button className="px-6 py-3 lg:px-8 lg:py-4 bg-[#025f61] hover:bg-[#014849] text-white rounded-xl font-bold text-base lg:text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#025f61]/40 flex items-center gap-3">
                Start Building <ArrowRight size={20} />
              </button>
              <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white dark:bg-[#0a1f20] border-2 border-slate-200 dark:border-white/10 hover:border-[#025f61] dark:hover:border-teal-500 text-slate-800 dark:text-white rounded-xl font-bold text-base lg:text-lg transition-all hover:-translate-y-1 flex items-center gap-3 shadow-sm">
                <Terminal size={20} /> View Documentation
              </button>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE: Terminal Code Block
              ========================================= */}
          <div className="w-full lg:w-[48%] flex justify-end">
            <div className="relative w-full max-w-[600px] mt-10 lg:mt-0">
              
              {/* Terminal Box */}
              <div className="bg-[#0d151c]/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(2,95,97,0.3)] border border-slate-700/50 overflow-hidden transform transition-all duration-700 hover:scale-[1.02]">
                
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 bg-[#15202b] border-b border-slate-700/50">
                  <div className="flex items-center gap-2 lg:gap-4 overflow-x-auto hide-scrollbar">
                    <div className="flex items-center gap-2 mr-2 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                    </div>

                    <div className="flex space-x-1 pt-3 shrink-0">
                      {['node', 'python', 'curl'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setActiveTab(lang)}
                          className={`px-3 lg:px-4 py-2 text-xs font-mono rounded-t-lg transition-colors border-b-2 ${
                            activeTab === lang 
                              ? 'bg-[#1e2d3d] text-white border-teal-400' 
                              : 'text-white hover:text-slate-300 border-transparent hover:bg-[#1e2d3d]/50'
                          }`}
                        >
                          {lang === 'node' ? 'Node.js' : lang === 'python' ? 'Python' : 'cURL'}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleCopyCode}
                    className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-md hover:bg-white/10 shrink-0 ml-2"
                    title="Copy Code"
                  >
                    {isCopied ? <Check size={16} className="text-teal-400" /> : <Copy size={16} />}
                  </button>
                </div>
                
                {/* Code Body */}
                <div className="p-6 lg:p-8 text-[13px] lg:text-[14px] font-mono leading-loose text-slate-300 overflow-x-auto min-h-[320px]">
                  <pre>
                    <code className="language-javascript">
                      {codeSnippets[activeTab].split('\n').map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          <span className="text-slate-600 select-none mr-4 inline-block w-4 text-right">{i + 1}</span>
                          
                          {/* FIX 2: Added "text-slate-200" class here to force white/light gray text! */}
                          <span className="text-slate-200" dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/await|const|import|from/g, '<span class="text-purple-400">$&</span>')
                              .replace(/fetch|requests\.request|console\.log|print/g, '<span class="text-blue-400">$&</span>')
                              .replace(/'.*?'|".*?"/g, '<span class="text-green-300">$&</span>')
                              .replace(/5000/g, '<span class="text-orange-300">5000</span>')
                          }} />
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating 3D Response Card */}
              <div className="absolute -bottom-12 -left-4 md:-left-12 bg-white dark:bg-[#112324] p-4 lg:p-5 rounded-xl shadow-2xl border border-slate-200 dark:border-teal-900/50 z-20 animate-[bounce_4s_infinite] w-[260px] lg:w-[280px]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] lg:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Live Response</span>
                  <span className="flex items-center gap-1.5 text-[10px] lg:text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-400/10 px-2 py-1 rounded">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    200 OK
                  </span>
                </div>
                <pre className="text-[10px] lg:text-[11px] font-mono text-slate-700 dark:text-teal-100 leading-relaxed bg-slate-50 dark:bg-[#0a1718] p-3 rounded-lg border border-slate-100 dark:border-white/5">
{`{
  "status": "success",
  "data": {
    "transaction_id": "txn_892nf8",
    "verified": true
  }
}`}
                </pre>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================
            BOTTOM SECTION: Divider & Metrics
            ========================================= */}
        <hr className="w-full border-slate-200 dark:border-slate-800" />
        
        <div className="flex flex-wrap items-center gap-6 lg:gap-12 pt-8">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm lg:text-base">
            <Activity size={20} className="text-[#025f61] dark:text-teal-400" /> 99.99% Uptime
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm lg:text-base">
            <Zap size={20} className="text-[#025f61] dark:text-teal-400" /> 50ms Latency
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold text-sm lg:text-base">
            <Shield size={20} className="text-[#025f61] dark:text-teal-400" /> Bank-Grade Security
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
