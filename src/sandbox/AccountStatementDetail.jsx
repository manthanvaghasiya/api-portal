import React, { useState } from 'react';
import SandboxNavbar from './SandboxNavbar';

const AccountStatementDetail = () => {
  const [activeTab, setActiveTab] = useState('input');

  const inputData = [
    { name: 'ReferenceNumber', type: 'alphanumeric', desc: 'Retrieval Reference Number.', mandatory: 'Y' },
    { name: 'MerchantID', type: 'alphanumeric', desc: 'Merchant Id.', mandatory: 'Y' },
    { name: 'MerchantPassword', type: 'alphanumeric', desc: 'Merchant Password.', mandatory: 'Y' },
    { name: 'CardNumber', type: 'alphanumeric', desc: 'Prepaid Card Number.', mandatory: 'N' },
    { name: 'MonthYear', type: 'numeric', desc: 'Month and Year for which account statement required in MMYYYY format.', mandatory: 'N' },
    { name: 'TransactionRemark', type: 'alphanumeric', desc: 'Remark provided during transaction..', mandatory: 'N' },
  ];

  const outputData = [
    { name: 'Username', type: 'alphanumeric', desc: 'User Name' },
    { name: 'TransactionCode', type: 'numeric', desc: 'Transaction code' },
    { name: 'RRN', type: 'alphanumeric', desc: 'Retrieval Reference Number' },
    { name: 'CardNumber', type: 'alphanumeric', desc: 'Card Number' },
    { name: 'TotalDebitAmt', type: 'numeric', desc: 'Total Debit Amount' },
    { name: 'TotalCreditAmt', type: 'numeric', desc: 'Total Credit Amount' },
    { name: 'LedgerBalAmt', type: 'numeric', desc: 'Ledger Balance Amount' },
    { name: 'AvailableBalAmt', type: 'numeric', desc: 'Available Balance Amount' },
    { name: 'ResponseCode', type: 'alphanumeric', desc: 'Response Code : successful (00)' },
    { name: 'ResponseData', type: 'alphanumeric', desc: 'Information Holding Tag in failure cases' },
    { name: 'PreAuthTransactionDtl', type: 'alphanumeric', desc: 'PreAuthTransactionDtl will contain Preauth transactions details' },
    { name: 'PostedTransactionCount', type: 'numeric', desc: 'Posted Transaction Count in the statement.' },
    { name: 'PreAuthTransactionCount', type: 'numeric', desc: 'Pending Transaction Count.' },
    { name: 'PreAuthHoldAmt', type: 'numeric', desc: 'Total PreAuth Hold Amount' },
    { name: 'MCCGrpCode', type: 'numeric', desc: 'Merchant Group code' },
    { name: 'HoldAmount', type: 'numeric', desc: 'Holding Amount' },
  ];

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
    <div className="flex flex-row min-h-screen bg-slate-50 pt-24 font-sans text-slate-800">
      
      <div className="bg-white shadow-sm z-10">
        <SandboxNavbar />
      </div>

      <div className="flex-1 px-12 py-10 overflow-y-auto">
        
        <div className="mb-8 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="text-green-600 text-[13px] font-bold uppercase tracking-wider mb-3">
            Loans and Cards / Cards / Prepaid card / Account Statement
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Account Statement</h1>
          <p className="text-[16px] text-slate-600 leading-relaxed max-w-4xl">
            This API is used for retrieving total Debit and Credit transaction details for particular months, Ledger Balance, Available Balance.
          </p>
        </div>

        <div className="flex flex-row gap-10 items-start">
          
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
                        <td className="py-4 px-5 text-[14px] font-bold text-slate-700 text-center">{row.mandatory}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
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

          <div className="w-[400px] flex-shrink-0 sticky top-10">
            
            <div className="bg-[#0d1117] rounded-xl shadow-xl overflow-hidden mb-6 border border-slate-700">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-xs font-mono text-white ml-4">Terminal - XML</div>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="text-[13px] text-[#4ade80] font-mono leading-relaxed">
{`<xml>
  <ReferenceNumber>20190704000016</ReferenceNumber>
  <MerchantId>FLP0000001</MerchantId>
  <MerchantPassword>admin12345</MerchantPassword>
  <MonthYear>042019</MonthYear>
  <CardNumber>4336620020565646</CardNumber>
  <TransactionRemark>FLIPKART Card</TransactionRemark>
</xml>`}
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

export default AccountStatementDetail;