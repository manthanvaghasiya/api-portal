import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import SandboxNavbar from './SandboxNavbar';
import { apiDetails } from './apiDetailsData'; 

const ApiDetailTemplate = () => {
  const [activeTab, setActiveTab] = useState('input');
  const { slug } = useParams(); 
  const apiData = apiDetails[slug];

  if (!apiData) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-bold text-slate-500 bg-slate-50">
        API Not Found
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 pt-20 md:pt-24 font-sans text-slate-800">
      
      <div className="bg-white shadow-sm z-10">
        <SandboxNavbar />
      </div>

      <div className="flex-1 w-full px-4 py-6 md:px-12 md:py-10 overflow-y-auto">
        
        {/* HEADER */}
        <div className="mb-6 md:mb-8 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {apiData.method && (
              <span className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-md uppercase tracking-wide">
                {apiData.method}
              </span>
            )}
            <div className="text-green-600 text-[12px] md:text-[13px] font-bold uppercase tracking-wider">
              {apiData.breadcrumbs}
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
            {apiData.title}
          </h1>
          <p className="text-[14px] md:text-[16px] text-slate-600 leading-relaxed max-w-4xl">
            {apiData.description}
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 items-start w-full">
          
          {/* LEFT COLUMN (Tables) */}
          <div className="flex-1 w-full bg-white p-3 md:p-8 rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            
            <div className="flex flex-row overflow-x-auto border-b border-slate-200 mb-6 gap-2 hide-scrollbar">
              {['input', 'output', 'errors'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap pb-3 px-2 md:px-4 text-[13px] md:text-[15px] font-bold capitalize transition-all duration-200 border-b-2 ${
                    activeTab === tab 
                      ? 'text-[#025f61] border-[#025f61]' 
                      : 'text-slate-500 border-transparent hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {tab === 'input' ? 'Input Parameters' : tab === 'output' ? 'Output Parameters' : 'Possible Errors'}
                </button>
              ))}
            </div>

            {/* 1. INPUT TABLE: Removed min-w-[600px] and added "table-fixed" and break-words */}
            {activeTab === 'input' && (
              <div className="rounded-lg border border-slate-200 w-full overflow-hidden">
                <table className="w-full text-left border-collapse table-fixed">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[25%]">Name</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[20%]">Type</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[35%]">Description</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] text-center w-[20%]">Mandatory</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.inputData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-none">
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] font-semibold text-slate-800 break-words">{row.name}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] text-slate-500 font-mono bg-slate-50/50 break-words">{row.type}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] text-slate-600 leading-snug md:leading-relaxed break-words">{row.desc}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] font-bold text-center">
                          <span className={`inline-flex items-center justify-center px-1.5 py-1 md:px-2.5 md:py-1 rounded-md md:rounded-full text-[9px] md:text-xs font-bold w-full ${
                            row.mandatory === 'Y' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {row.mandatory === 'Y' ? 'Req' : 'Opt'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {/* 2. OUTPUT TABLE: Removed min-w-[500px] */}
            {activeTab === 'output' && (
              <div className="rounded-lg border border-slate-200 w-full overflow-hidden">
                <table className="w-full text-left border-collapse table-fixed">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[30%]">Name</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[25%]">Type</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[45%]">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.outputData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-none">
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] font-semibold text-slate-800 break-words">{row.name}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] text-slate-500 font-mono bg-slate-50/50 break-words">{row.type}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] text-slate-600 leading-snug md:leading-relaxed break-words">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* 3. ERRORS TABLE: Removed min-w-[500px] */}
            {activeTab === 'errors' && (
              <div className="rounded-lg border border-slate-200 w-full overflow-hidden">
                <table className="w-full text-left border-collapse table-fixed">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[25%]">Code</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[35%]">Name</th>
                      <th className="py-3 px-2 md:py-4 md:px-5 text-[#0070c0] font-bold text-[11px] md:text-[14px] w-[40%]">Logs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.errorData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-none">
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] font-bold text-red-600 font-mono break-words">{row.code}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] font-medium text-slate-700 break-words">{row.name}</td>
                        <td className="py-3 px-2 md:py-4 md:px-5 text-[11px] md:text-[14px] text-slate-500 leading-snug md:leading-relaxed break-words">{row.logs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN (Terminal & Buttons) */}
          <div className="w-full lg:w-[400px] flex-shrink-0 lg:sticky lg:top-10">
            
            <div className="bg-[#0d1117] rounded-xl shadow-xl overflow-hidden mb-6 border border-slate-700 w-full">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs font-mono text-white ml-4">Terminal - {apiData.terminalType}</div>
              </div>
              
              <div className="p-4 md:p-6 overflow-x-auto w-full">
                <pre className="text-[12px] md:text-[13px] text-[#4ade80] font-mono leading-relaxed whitespace-pre-wrap word-break-all">
                  {apiData.codeSnippet}
                </pre>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 w-full">
              <button className="w-full py-3 bg-[#025f61] hover:bg-[#014244] text-white font-bold text-[14px] rounded-lg shadow-md transition-colors tracking-wide">
                TEST API
              </button>
              
              <button className="w-full py-3 bg-white border-2 border-[#0070c0] text-[#0070c0] hover:bg-blue-50 font-bold text-[14px] rounded-lg shadow-sm transition-colors tracking-wide">
                API DOCUMENT
              </button>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  );
};

export default ApiDetailTemplate;