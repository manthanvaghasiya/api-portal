import React, { useState } from 'react';
import { Loader2, Plus, Trash2 } from 'lucide-react';

const AdminAddApi = () => {
  // 1. We added inputData and outputData to hold our table rows!
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    title: '',
    description: '',
    method: 'POST',
    status: 'active',
    codeSnippet: '',
    inputData: [], 
    outputData: [] 
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. Handles normal typing boxes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. MAGIC FOR NON-TECHIES: Adding a new row to the tables
  const addTableRow = (tableName) => {
    setFormData({
      ...formData,
      [tableName]: [
        ...formData[tableName],
        { parameter: '', type: 'string', required: 'Yes', description: '' }
      ]
    });
  };

  // 4. Updating a specific row in the tables
  const updateTableRow = (tableName, index, field, value) => {
    const updatedTable = [...formData[tableName]];
    updatedTable[index][field] = value;
    setFormData({ ...formData, [tableName]: updatedTable });
  };

  // 5. Deleting a row from the tables
  const removeTableRow = (tableName, index) => {
    const updatedTable = formData[tableName].filter((_, i) => i !== index);
    setFormData({ ...formData, [tableName]: updatedTable });
  };

  // 6. Send to Backend (Using the secret Vite Address!)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Notice we are using the secret address book here!
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/add-api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Success! The API was securely added to the database.");
        // Clear the form
        setFormData({ 
          name: '', slug: '', title: '', description: '', method: 'POST', status: 'active', codeSnippet: '', inputData: [], outputData: [] 
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
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 flex justify-center font-sans text-slate-800">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900">Add New API</h1>
          <p className="text-slate-500 mt-1">Easily add APIs without touching any code!</p>
        </div>

        {message && (
          <div className={`p-4 rounded-lg mb-6 font-semibold text-sm ${message.includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* --- BASIC INFO SECTION --- */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b pb-2 text-[#0a5e54]">1. Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Sidebar Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Add Funds API" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">URL Slug (no spaces)</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} required placeholder="e.g. add-funds" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Main Page Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Add Funds to Wallet" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">HTTP Method</label>
                <select name="method" value={formData.method} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none">
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows="3" placeholder="What does this API do?" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none"></textarea>
            </div>
          </div>

          {/* --- INPUT TABLES SECTION (NON-TECH FRIENDLY) --- */}
          <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0a5e54]">2. Input Parameters (Table)</h2>
              <button type="button" onClick={() => addTableRow('inputData')} className="flex items-center gap-1 bg-[#0a5e54] text-white px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-[#084d46]">
                <Plus size={16} /> Add Row
              </button>
            </div>

            {formData.inputData.map((row, index) => (
              <div key={index} className="flex gap-2 items-start bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                <input type="text" placeholder="Name (e.g. amount)" value={row.parameter} onChange={(e) => updateTableRow('inputData', index, 'parameter', e.target.value)} className="flex-1 px-3 py-2 border rounded text-sm" />
                <select value={row.type} onChange={(e) => updateTableRow('inputData', index, 'type', e.target.value)} className="w-24 px-3 py-2 border rounded text-sm bg-white">
                  <option value="string">String</option>
                  <option value="number">Number</option>
                  <option value="boolean">Boolean</option>
                </select>
                <select value={row.required} onChange={(e) => updateTableRow('inputData', index, 'required', e.target.value)} className="w-24 px-3 py-2 border rounded text-sm bg-white">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <input type="text" placeholder="Description" value={row.description} onChange={(e) => updateTableRow('inputData', index, 'description', e.target.value)} className="flex-2 px-3 py-2 border rounded text-sm w-full" />
                <button type="button" onClick={() => removeTableRow('inputData', index)} className="text-red-500 p-2 hover:bg-red-50 rounded">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            {formData.inputData.length === 0 && <p className="text-sm text-slate-500 italic">No input parameters added yet. Click "Add Row".</p>}
          </div>

          {/* --- OUTPUT TABLES SECTION --- */}
          <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#0a5e54]">3. Output Parameters (Table)</h2>
              <button type="button" onClick={() => addTableRow('outputData')} className="flex items-center gap-1 bg-[#0a5e54] text-white px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-[#084d46]">
                <Plus size={16} /> Add Row
              </button>
            </div>

            {formData.outputData.map((row, index) => (
              <div key={index} className="flex gap-2 items-start bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                <input type="text" placeholder="Name (e.g. status)" value={row.parameter} onChange={(e) => updateTableRow('outputData', index, 'parameter', e.target.value)} className="flex-1 px-3 py-2 border rounded text-sm" />
                <select value={row.type} onChange={(e) => updateTableRow('outputData', index, 'type', e.target.value)} className="w-24 px-3 py-2 border rounded text-sm bg-white">
                  <option value="string">String</option>
                  <option value="number">Number</option>
                  <option value="boolean">Boolean</option>
                </select>
                <select value={row.required} onChange={(e) => updateTableRow('outputData', index, 'required', e.target.value)} className="w-24 px-3 py-2 border rounded text-sm bg-white">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <input type="text" placeholder="Description" value={row.description} onChange={(e) => updateTableRow('outputData', index, 'description', e.target.value)} className="flex-2 px-3 py-2 border rounded text-sm w-full" />
                <button type="button" onClick={() => removeTableRow('outputData', index)} className="text-red-500 p-2 hover:bg-red-50 rounded">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
             {formData.outputData.length === 0 && <p className="text-sm text-slate-500 italic">No output parameters added yet. Click "Add Row".</p>}
          </div>

          {/* --- TERMINAL CODE SNIPPET --- */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold pb-2 text-[#0a5e54]">4. Example Code Response</h2>
            <label className="block text-sm font-bold text-slate-700">Terminal Code Snippet (Paste the JSON response here)</label>
            <textarea name="codeSnippet" value={formData.codeSnippet} onChange={handleChange} required rows="5" placeholder='{"status": "success", "amount": 500}' className="w-full px-4 py-2 bg-slate-800 text-green-400 font-mono border border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center gap-2 bg-[#0a5e54] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#084d46] transition-all shadow-lg shadow-[#0a5e54]/30 disabled:bg-slate-400">
            {isLoading ? <><Loader2 className="animate-spin" size={24} /> Saving Everything...</> : "SAVE API TO DATABASE"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminAddApi;