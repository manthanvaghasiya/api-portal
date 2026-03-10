import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const AdminAddApi = () => {
  // 1. This holds all the typed information
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    title: '',
    description: '',
    method: 'POST',
    status: 'active',
    codeSnippet: ''
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. This updates our state whenever someone types in a box
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. This sends the data to your Render Backend!
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch("https://api-portal-lyuy.onrender.com/api/admin/add-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Success! The API was securely added to the database.");
        // Clear the form so they can add another one
        setFormData({ name: '', slug: '', title: '', description: '', method: 'POST', status: 'active', codeSnippet: '' });
      } else {
        setMessage("❌ Error: " + data.message);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. The server might be asleep!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 flex justify-center font-sans text-slate-800">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900">Add New API</h1>
          <p className="text-slate-500 mt-1">Non-tech team portal to add new APIs to the Sandbox.</p>
        </div>

        {message && (
          <div className={`p-4 rounded-lg mb-6 font-semibold text-sm ${message.includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name and Slug */}
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

          {/* Row 2: Title and Method */}
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

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows="3" placeholder="What does this API do?" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none"></textarea>
          </div>

          {/* Code Snippet */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Terminal Code Snippet</label>
            <textarea name="codeSnippet" value={formData.codeSnippet} onChange={handleChange} required rows="5" placeholder='{"status": "success"}' className="w-full px-4 py-2 bg-slate-800 text-green-400 font-mono border border-slate-700 rounded-lg focus:ring-2 focus:ring-[#0a5e54] focus:outline-none"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center gap-2 bg-[#0a5e54] text-white py-3 rounded-xl font-bold hover:bg-[#084d46] transition-all shadow-lg disabled:bg-slate-400">
            {isLoading ? <><Loader2 className="animate-spin" size={20} /> Saving to Database...</> : "SAVE API"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminAddApi;