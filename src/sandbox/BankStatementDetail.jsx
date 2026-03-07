import React, { useState } from 'react';
import SandboxNavbar from './SandboxNavbar';

const BankStatementDetail = () => {
  const [activeTab, setActiveTab] = useState('input');

  const inputData = [
    { name: 'AGGRID', type: 'Alphanumeric', desc: 'Unique id created by ICICI for customer to perform authorized/regulated transactions.', mandatory: 'Y' },
    { name: 'CORPID', type: 'Alphanumeric', desc: 'Corporate ID assigned for the Corporate Internet Banking (CIB).', mandatory: 'Y' },
    { name: 'USERID', type: 'Alphanumeric', desc: 'User ID under Corporate ID in CIB.', mandatory: 'Y' },
    { name: 'ACCOUNTNO', type: 'Alphanumeric', desc: 'Account Number mapped to user.', mandatory: 'Y' },
    { name: 'FROMDATE', type: 'Date', desc: 'From date (DD-MM-YYYY).', mandatory: 'Y' },
    { name: 'TODATE', type: 'Date', desc: 'To date (DD-MM-YYYY).', mandatory: 'Y' },
    { name: 'URN', type: 'Alphanumeric', desc: 'URN provided at Registration time.', mandatory: 'Y' },
  ];

  const outputData = [
    { name: 'AGGRID', type: 'Alphanumeric', desc: 'Unique id created for authorized transactions' },
    { name: 'CORPID', type: 'Alphanumeric', desc: 'Corporate ID assigned for CIB.' },
    { name: 'USERID', type: 'Alphanumeric', desc: 'User ID under Corporate ID' },
    { name: 'ACCOUNTNO', type: 'Alphanumeric', desc: 'Account Number mapped to user' },
    { name: 'URN', type: 'Alphanumeric', desc: 'URN provided at Registration time' },
    { name: 'Record', type: 'Nested JSON', desc: 'Contain bank statement records' },
    { name: 'MESSAGE', type: 'Text', desc: 'Error Message (Not available in Success)' },
    { name: 'RESPONSE', type: 'Text', desc: 'API Response: "SUCCESS" or "FAILURE"' },
  ];

  const errorData = [
    { code: '8000', name: 'Invalid Encrypted Request', logs: 'Decryption Failure' },
    { code: '8001', name: 'Json Is Empty', logs: 'Json Schema Request Empty' },
    { code: '8002', name: 'Invalid Json', logs: 'Json Is Not Valid.' },
    { code: '8004', name: 'Missing Required Field Data', logs: 'Mandatory Field Data Is Missing.' },
    { code: '8005', name: 'Missing Required Field', logs: 'Mandatory Field Is Missing.' },
    { code: '8010', name: 'Internal Service Failure', logs: 'Routing Failure.' },
    { code: '8012', name: 'Backend Connection Timeout', logs: 'When Connection Gets Timeout' },
  ];

  return (
    <div className="flex flex-row min-h-screen bg-white pt-24 font-sans text-slate-700">
      <SandboxNavbar />

      <div className="flex-1 px-12 py-8 bg-white overflow-y-auto">
        <div className="mb-8">
          <div className="text-green-600 text-[14px] font-medium mb-2">
            Payments / Banking / Bank Statement
          </div>
          <h1 className="text-4xl font-normal text-slate-800 mb-4">Bank Statement API</h1>
          <p className="text-[15px] text-slate-500 leading-relaxed max-w-5xl">
            This API is used to fetch the account statement (upto 2000 records) of all registered account numbers of the customers.
          </p>
        </div>

        <div className="w-full h-px bg-slate-200 mb-8"></div>

        <div className="flex flex-row gap-12">
          <div className="flex-1">
            <div className="flex flex-row border-b border-slate-200 mb-8">
              <button 
                onClick={() => setActiveTab('input')}
                className={`pb-3 px-1 mr-8 text-[15px] font-medium transition-colors ${activeTab === 'input' ? 'text-[#025f61] border-b-2 border-[#025f61]' : 'text-slate-600'}`}
              >
                Input Parameters
              </button>
              <button 
                onClick={() => setActiveTab('output')}
                className={`pb-3 px-1 mr-8 text-[15px] font-medium transition-colors ${activeTab === 'output' ? 'text-[#025f61] border-b-2 border-[#025f61]' : 'text-slate-600'}`}
              >
                Output Parameters
              </button>
              <button 
                onClick={() => setActiveTab('errors')}
                className={`pb-3 px-1 text-[15px] font-medium transition-colors ${activeTab === 'errors' ? 'text-[#025f61] border-b-2 border-[#025f61]' : 'text-slate-600'}`}
              >
                Possible Errors
              </button>
            </div>

            <h3 className="text-lg font-medium text-slate-700 mb-4 capitalize">{activeTab} details</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#0070c0] text-[15px]">
                  <th className="py-3 px-4">{activeTab === 'errors' ? 'Error Code' : 'Name'}</th>
                  <th className="py-3 px-4">{activeTab === 'errors' ? 'Error Name' : 'Type'}</th>
                  <th className="py-3 px-4">{activeTab === 'errors' ? 'Error Logs' : 'Description'}</th>
                  {activeTab === 'input' && <th className="py-3 px-4 text-center">Mandatory</th>}
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'input' ? inputData : activeTab === 'output' ? outputData : errorData).map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 text-[15px] text-slate-700">{row.name || row.code}</td>
                    <td className="py-4 px-4 text-[15px] text-slate-500">{row.type || row.name}</td>
                    <td className="py-4 px-4 text-[15px] text-slate-500">{row.desc || row.logs}</td>
                    {activeTab === 'input' && <td className="py-4 px-4 text-[15px] text-slate-700 text-center">{row.mandatory}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-[400px] flex-shrink-0">
            <h3 className="text-[16px] font-medium text-slate-700 mb-4">Sample Request Packet</h3>
            <div className="bg-slate-50 border border-slate-100 rounded p-6 mb-8 overflow-x-auto shadow-inner">
              <pre className="text-[13px] text-slate-800 font-mono leading-relaxed">
{`{
  "CORPID": "PRACHICIB1",
  "USERID": "USER3",
  "AGGRID": "TXBCIB01N",
  "ACCOUNTNO": "000405001257",
  "FROMDATE": "01-01-2016",
  "TODATE": "30-12-2016",
  "URN": "15639710001"
}`}
              </pre>
            </div>
            <button className="w-[160px] py-3 bg-[#025f61] hover:bg-[#852129] text-white font-bold text-[14px] rounded shadow-md transition-colors tracking-wide">
              TEST API
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankStatementDetail;