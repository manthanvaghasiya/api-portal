import React, { useState } from 'react';
import { Database, Plus, Trash2, Loader2 } from 'lucide-react';

const AddApi = () => {
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    breadcrumbs: '',
    method: 'POST',
    description: '',
    terminalType: 'JSON',
    codeSnippet: '',
    inputData: [],
    outputData: [],
    errorData: []
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle normal typing boxes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add new rows for the arrays
  const addRow = (arrayName, emptyObject) => {
    setFormData({
      ...formData,
      [arrayName]: [...formData[arrayName], emptyObject]
    });
  };

  // Update specific rows
  const updateRow = (arrayName, index, field, value) => {
    const updatedArray = [...formData[arrayName]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  // Delete rows
  const removeRow = (arrayName, index) => {
    const updatedArray = formData[arrayName].filter((_, i) => i !== index);
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  // 🔥 MAGIC: Send data to the Backend Database!
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/apis/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Success! The API was securely saved to the Database.");
        // Clear the form so they can add another one
        setFormData({
          slug: '', title: '', breadcrumbs: '', method: 'POST', description: '', terminalType: 'JSON', codeSnippet: '', inputData: [], outputData: [], errorData: []
        });
      } else {
        setMessage("❌ Error: " + data.message);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Make sure your backend server is running!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#011112] pt-24 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="bg-white dark:bg-[#0d151c] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0a5e54]/10 text-[#0a5e54] dark:text-teal-400 rounded-xl flex items-center justify-center shrink-0">
            <Database size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Add New API to Database</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Fill this out to instantly add a new API to the Sandbox.</p>
          </div>
        </div>

        {/* NOTIFICATION MESSAGE */}
        {message && (
          <div className={`p-4 rounded-xl font-bold text-center border ${message.includes('Success') ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20' : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* SECTION 1: BASIC INFO */}
          <div className="bg-white dark:bg-[#0d151c] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
            <h2 className="text-lg font-bold text-[#0a5e54] dark:text-teal-400 border-b border-slate-100 dark:border-slate-800 pb-2">1. Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">API Slug (Used for URL)</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} required placeholder="e.g. bank-statement" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0a5e54] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Bank Statement API" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0a5e54] outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Breadcrumbs</label>
                <input type="text" name="breadcrumbs" value={formData.breadcrumbs} onChange={handleChange} placeholder="e.g. Payments / BBPS / Agent" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0a5e54] outline-none" />
              </div>
              <div>
               <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Method</label>
                <input 
                type="text" 
                name="method" 
                value={formData.method} 
                readOnly 
                className="w-full px-4 py-2.5 bg-slate-200 dark:bg-[#1a2630] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 cursor-not-allowed outline-none font-bold" 
               />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Terminal Type</label>
                <input type="text" name="terminalType" value={formData.terminalType} onChange={handleChange} placeholder="e.g. JSON or bash" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0a5e54] outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="3" placeholder="This API is used for..." className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#111c24] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0a5e54] outline-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Code Snippet (The JSON Payload)</label>
                <textarea name="codeSnippet" value={formData.codeSnippet} onChange={handleChange} rows="5" placeholder={`{\n  "status": "success"\n}`} className="w-full font-mono text-sm px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-green-400 focus:ring-2 focus:ring-[#0a5e54] outline-none"></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 2: INPUT DATA */}
          <div className="bg-white dark:bg-[#0d151c] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              <h2 className="text-lg font-bold text-[#0a5e54] dark:text-teal-400">2. Input Data</h2>
              <button type="button" onClick={() => addRow('inputData', { name: '', type: 'Alphanumeric', desc: '', mandatory: 'Y' })} className="flex items-center gap-1 text-sm bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 px-3 py-1.5 rounded-lg font-bold transition">
                <Plus size={16} /> Add Row
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.inputData.map((row, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 p-4 bg-slate-50 dark:bg-[#111c24] rounded-xl border border-slate-200 dark:border-slate-700 relative">
                  <input type="text" placeholder="Name" value={row.name} onChange={(e) => updateRow('inputData', index, 'name', e.target.value)} className="md:col-span-3 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <select 
  value={row.type} 
  onChange={(e) => updateRow('inputData', index, 'type', e.target.value)} 
  className="md:col-span-3 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none cursor-pointer"
>
  <option value="Alphanumeric">Alphanumeric</option>
  <option value="Numeric">Numeric</option>
  <option value="String">String</option>
  <option value="Boolean">Boolean</option>
  <option value="Double">Double</option>
  <option value="Date">Date</option>
  <option value="Object">Object</option>
  <option value="Array">Array</option>
</select>
                  <input type="text" placeholder="Mandatory (Y/N)" value={row.mandatory} onChange={(e) => updateRow('inputData', index, 'mandatory', e.target.value)} className="md:col-span-2 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <input type="text" placeholder="Description" value={row.desc} onChange={(e) => updateRow('inputData', index, 'desc', e.target.value)} className="sm:col-span-2 md:col-span-3 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <button type="button" onClick={() => removeRow('inputData', index)} className="absolute top-2 right-2 md:static md:col-span-1 flex justify-center items-center text-red-500 hover:text-red-700 bg-red-50 dark:bg-red-500/10 p-2 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {formData.inputData.length === 0 && <p className="text-sm text-slate-500 italic">No inputs added.</p>}
            </div>
          </div>

          {/* SECTION 3: OUTPUT DATA */}
          <div className="bg-white dark:bg-[#0d151c] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              <h2 className="text-lg font-bold text-[#0a5e54] dark:text-teal-400">3. Output Data</h2>
              <button type="button" onClick={() => addRow('outputData', { name: '', type: 'Alphanumeric', desc: '' })} className="flex items-center gap-1 text-sm bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 px-3 py-1.5 rounded-lg font-bold transition">
                <Plus size={16} /> Add Row
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.outputData.map((row, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 p-4 bg-slate-50 dark:bg-[#111c24] rounded-xl border border-slate-200 dark:border-slate-700 relative">
                  <input type="text" placeholder="Name" value={row.name} onChange={(e) => updateRow('outputData', index, 'name', e.target.value)} className="md:col-span-3 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <select 
  value={row.type} 
  onChange={(e) => updateRow('outputData', index, 'type', e.target.value)} 
  className="md:col-span-3 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none cursor-pointer"
>
  <option value="Alphanumeric">Alphanumeric</option>
  <option value="Numeric">Numeric</option>
  <option value="String">String</option>
  <option value="Boolean">Boolean</option>
  <option value="Double">Double</option>
  <option value="Date">Date</option>
  <option value="Object">Object</option>
  <option value="Array">Array</option>
</select>
                  <input type="text" placeholder="Description" value={row.desc} onChange={(e) => updateRow('outputData', index, 'desc', e.target.value)} className="sm:col-span-2 md:col-span-5 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <button type="button" onClick={() => removeRow('outputData', index)} className="absolute top-2 right-2 md:static md:col-span-1 flex justify-center items-center text-red-500 hover:text-red-700 bg-red-50 dark:bg-red-500/10 p-2 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {formData.outputData.length === 0 && <p className="text-sm text-slate-500 italic">No outputs added.</p>}
            </div>
          </div>

          {/* SECTION 4: ERROR DATA */}
          <div className="bg-white dark:bg-[#0d151c] p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              <h2 className="text-lg font-bold text-[#0a5e54] dark:text-teal-400">4. Error Data</h2>
              <button type="button" onClick={() => addRow('errorData', { code: '', name: '', logs: '' })} className="flex items-center gap-1 text-sm bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 px-3 py-1.5 rounded-lg font-bold transition">
                <Plus size={16} /> Add Row
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.errorData.map((row, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 p-4 bg-slate-50 dark:bg-[#111c24] rounded-xl border border-slate-200 dark:border-slate-700 relative">
                  <input type="text" placeholder="Code (e.g. 8000)" value={row.code} onChange={(e) => updateRow('errorData', index, 'code', e.target.value)} className="md:col-span-2 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <input type="text" placeholder="Name" value={row.name} onChange={(e) => updateRow('errorData', index, 'name', e.target.value)} className="md:col-span-4 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <input type="text" placeholder="Logs" value={row.logs} onChange={(e) => updateRow('errorData', index, 'logs', e.target.value)} className="sm:col-span-2 md:col-span-5 px-3 py-2 rounded-lg text-sm border dark:border-slate-600 bg-white dark:bg-[#0d151c] dark:text-white outline-none" />
                  <button type="button" onClick={() => removeRow('errorData', index)} className="absolute top-2 right-2 md:static md:col-span-1 flex justify-center items-center text-red-500 hover:text-red-700 bg-red-50 dark:bg-red-500/10 p-2 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
              {formData.errorData.length === 0 && <p className="text-sm text-slate-500 italic">No errors added.</p>}
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center gap-2 bg-[#0a5e54] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#084d46] transition-all shadow-lg shadow-[#0a5e54]/30 disabled:opacity-70">
            {isLoading ? <><Loader2 className="animate-spin" size={24} /> Saving...</> : "SAVE API TO DATABASE"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default AddApi;