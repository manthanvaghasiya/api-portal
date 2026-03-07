import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Imports hook to read URL
import SandboxNavbar from './SandboxNavbar';
import { apiDetails } from './apiDetailsData'; // Import your new data file

const ApiDetailTemplate = () => {
  const [activeTab, setActiveTab] = useState('input');
  
  // Grab the slug from the URL (e.g. if URL is /api/add-funds, slug = "add-funds")
  const { slug } = useParams(); 

  // Look up the data for this specific API
  const apiData = apiDetails[slug];

  // If the user types a bad URL, show an error message
  if (!apiData) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-bold text-slate-500 bg-slate-50">
        API Not Found
      </div>
    );
  }

  // If found, render your exact design, replacing hardcoded text with apiData values!
  return (
    <div className="flex flex-row min-h-screen bg-slate-50 pt-24 font-sans text-slate-800">
      
      <div className="bg-white shadow-sm z-10">
        <SandboxNavbar />
      </div>

      <div className="flex-1 px-12 py-10 overflow-y-auto">
        
        {/* HEADER */}
        <div className="mb-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            {/* Only show POST badge if the data has a method */}
            {apiData.method && (
              <span className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-md uppercase tracking-wide">
                {apiData.method}
              </span>
            )}
            <div className="text-green-600 text-[13px] font-bold uppercase tracking-wider">
              {apiData.breadcrumbs}
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{apiData.title}</h1>
          <p className="text-[16px] text-slate-600 leading-relaxed max-w-4xl">
            {apiData.description}
          </p>
        </div>

        <div className="flex flex-row gap-10 items-start">
          
          {/* LEFT COLUMN: Tabs and Tables */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            
            <div className="flex flex-row border-b border-slate-200 mb-6 gap-2">
              {['input', 'output', 'errors'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-4 text-[15px] font-bold capitalize transition-all duration-200 border-b-2 ${
                    activeTab === tab 
                      ? 'text-[#025f61] border-[#025f61]' 
                      : 'text-slate-500 border-transparent hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {tab === 'input' ? 'Input Parameters' : tab === 'output' ? 'Output Parameters' : 'Possible Errors'}
                </button>
              ))}
            </div>

            {/* INPUT TABLE */}
            {activeTab === 'input' && (
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Name</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Type</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Description</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px] text-center">Mandatory</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.inputData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-none">
                        <td className="py-4 px-5 text-[14px] font-semibold text-slate-800">{row.name}</td>
                        <td className="py-4 px-5 text-[14px] text-slate-500 font-mono bg-slate-50/50">{row.type}</td>
                        <td className="py-4 px-5 text-[14px] text-slate-600 leading-relaxed">{row.desc}</td>
                        <td className="py-4 px-5 text-[14px] font-bold text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                            row.mandatory === 'Y' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {row.mandatory === 'Y' ? 'Required' : 'Optional'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {/* OUTPUT TABLE */}
            {activeTab === 'output' && (
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Name</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Type</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.outputData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-none">
                        <td className="py-4 px-5 text-[14px] font-semibold text-slate-800">{row.name}</td>
                        <td className="py-4 px-5 text-[14px] text-slate-500 font-mono bg-slate-50/50">{row.type}</td>
                        <td className="py-4 px-5 text-[14px] text-slate-600 leading-relaxed">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ERRORS TABLE */}
            {activeTab === 'errors' && (
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-200">
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Error Code</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Error Name</th>
                      <th className="py-4 px-5 text-[#0070c0] font-bold text-[14px]">Error Logs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData.errorData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-50 transition-colors border-b border-slate-200 last:border-none">
                        <td className="py-4 px-5 text-[14px] font-bold text-red-600 font-mono">{row.code}</td>
                        <td className="py-4 px-5 text-[14px] font-medium text-slate-700">{row.name}</td>
                        <td className="py-4 px-5 text-[14px] text-slate-500">{row.logs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[400px] flex-shrink-0 sticky top-10">
            
            <div className="bg-[#0d1117] rounded-xl shadow-xl overflow-hidden mb-6 border border-slate-700">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs font-mono text-white ml-4">Terminal - {apiData.terminalType}</div>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="text-[13px] text-[#4ade80] font-mono leading-relaxed">
                  {apiData.codeSnippet}
                </pre>
              </div>
            </div>

            <div className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
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