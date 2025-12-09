import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const JobSearch: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger navigation or API call
    console.log('Searching for:', keyword, location);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl -mt-10 relative z-10 max-w-4xl mx-auto border border-slate-100">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 relative">
          <label htmlFor="keyword" className="sr-only">Jobtitel oder Firma</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            id="keyword"
            className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all"
            placeholder="z.B. Bauleiter, Polier, Maurer..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        
        <div className="md:col-span-4 relative">
          <label htmlFor="location" className="sr-only">Ort</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            id="location"
            className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-all"
            placeholder="Stadt oder PLZ"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Jobs finden
          </button>
        </div>
      </form>
      
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
        <span className="font-semibold">Beliebte Suchbegriffe:</span>
        <button className="hover:text-amber-600 underline">Bauleiter Hochbau</button>
        <button className="hover:text-amber-600 underline">Projektleiter TGA</button>
        <button className="hover:text-amber-600 underline">Kranführer</button>
        <button className="hover:text-amber-600 underline">Zimmerer</button>
        <button className="hover:text-amber-600 underline">Bauingenieur</button>
      </div>
    </div>
  );
};

export default JobSearch;