import React, { useState } from 'react';
import SandboxNavbar from './SandboxNavbar';

const AddFundsDetail = () => {
  const [activeTab, setActiveTab] = useState('input');

  // STEP 1: The Input Data List (100% UNCHANGED)
  const inputData = [
    { name: 'MOBILE', type: 'Number', desc: 'A valid 10 digit mobile number.', mandatory: 'Y' },
    { name: 'CHANNEL', type: 'String', desc: 'Respective channel code.', mandatory: 'Y' },
    { name: 'AMOUNT', type: 'Double', desc: 'Amount should not be more than 10000 per month Amount value is in rupee..', mandatory: 'Y' },
    { name: 'RRN', type: 'Alphanumeric', desc: 'unique reference number Example: PKT0000017 First three characters of the reference number should be channel code..', mandatory: 'Y' }
  ];

  // STEP 2: The Output Data List (100% UNCHANGED)
  const outputData = [
    { name: 'STATUS', type: 'String', desc: 'Current Status' },
    { name: 'LOCALTRANDATE', type: 'String', desc: 'Transaction date (YYYYMMDD)' },
    { name: 'LOCALTRANTIME', type: 'String', desc: 'Transaction time' },
    { name: 'AVAILBALANCE', type: 'Number', desc: 'Available balance in the wallet after adding funds' },
    { name: 'CHANNEL', type: 'String', desc: 'Respective channel code' },
    { name: 'RRN', type: 'Alphanumeric', desc: 'unique reference number Example: PKT0000017 First three characters of the reference number should be channel code.' },
    { name: 'MESSAGE', type: 'String', desc: 'Description message' },
    { name: 'RESPONSE', type: 'Number', desc: 'Response code' }
  ];

  // STEP 3: The Error Data List (100% UNCHANGED)
  const errorData = [
    { code: '8000', name: 'Invalid Encrypted Request', logs: 'Decryption Failure' },
    { code: '8001', name: 'Json Is Empty', logs: 'Json Schema Request Empty' },
    { code: '8002', name: 'Invalid Json', logs: 'Json Is Not Valid.' },
    { code: '8003', name: 'Data Size Limit Exceeded', logs: 'Field Is Not In The Format Mentioned.' },
    { code: '8004', name: 'Missing Required Field Data', logs: 'Mandatory Field Data Is Missing.' },
    { code: '8005', name: 'Missing Required Field', logs: 'Mandatory Field Is Missing.' },
    { code: '8006', name: 'Invalid Field Length', logs: 'Length Of Field Exceeds Defined Length.' },
    { code: '8007', name: 'Invalid Json,Open Curly Brace Missing.', logs: 'Open Brace Missing In Json.' },
    { code: '8008', name: 'Invalid Json,End Curly Brace Missing.', logs: 'Closing Brace Missing In Json.' },
    { code: '8009', name: 'Internal Server Error', logs: 'White Space Characters.' },
    { code: '8010', name: 'Internal Service Failure', logs: 'Routing Failure.' },
    { code: '8011', name: 'Backend Host Not Found', logs: 'Backend Host Not Found' },
    { code: '8012', name: 'Backend Connection Timeout', logs: 'When Connection Gets Timeout' },
    { code: '8013', name: 'Backend Read Timeout', logs: 'Timed Out For Reading The Response' },
    { code: '8014', name: 'Backend Bad Url', logs: 'Backend Bad Url' },
    { code: '8016', name: 'Decryption Failure', logs: 'Request Is Not Encrypted Properly' },
    { code: '8019', name: 'Respose Encryption Failure', logs: 'Response Cannot Be Encrypted' },
  ];

  return (
    // The Main Wrapper
    <div className="flex flex-row min-h-screen bg-slate-50 pt-24 font-sans text-slate-800">
      
      {/* THE SIDEBAR */}
      <div className="bg-white shadow-sm z-10">
        <SandboxNavbar />
      </div>

      {/* THE MAIN CONTENT */}
      <div className="flex-1 px-12 py-10 overflow-y-auto">
        
        {/* TOP SECTION: Breadcrumbs, Title, and Description */}
        <div className="mb-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-md uppercase tracking-wide">POST</span>
            <div className="text-green-600 text-[13px] font-bold uppercase tracking-wider">
              Payments / Wallet / Add Funds
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Add Funds API</h1>
          
          <p className="text-[16px] text-slate-600 leading-relaxed max-w-4xl">
            This API is used for funding wallet based on mobile number.
          </p>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-row gap-10 items-start">
          
          {/* LEFT COLUMN: Tabs and Tables */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            
            {/* The 3 Tabs - UPGRADED DESIGN */}
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

            {/* TAB 1: INPUT TABLE */}
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
                    {inputData.map((row, index) => (
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
            
            {/* TAB 2: OUTPUT TABLE */}
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
                    {outputData.map((row, index) => (
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

            {/* TAB 3: ERRORS TABLE */}
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
                    {errorData.map((row, index) => (
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

          {/* RIGHT COLUMN: Code Sample and Buttons (NOW STICKY) */}
          <div className="w-[400px] flex-shrink-0 sticky top-10">
            
            {/* THE COMMAND PROMPT BOX (UPGRADED) */}
            <div className="bg-[#0d1117] rounded-xl shadow-xl overflow-hidden mb-6 border border-slate-700">
              {/* Fake Window Header */}
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs font-mono text-white ml-4">Terminal - JSON</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-[13px] text-[#4ade80] font-mono leading-relaxed">
{`{
  "MOBILE": "9652657567",
  "CHANNEL": "POCKETS",
  "AMOUNT": "1.00",
  "RRN": "PKT0000020"
}`}
                </pre>
              </div>
            </div>

            {/* The Buttons Container */}
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

export default AddFundsDetail;