import React from 'react';
import { MOCK_JOBS } from '../constants';

function Employees() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Aktuelle Stellenangebote</h1>
        <p className="text-xl text-slate-600">Durchsuchen Sie offene Stellen im Baugewerbe.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_JOBS.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-left hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">{job.type}</span>
              <span className="text-slate-400 text-sm">{job.postedAt}</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">{job.title}</h3>
            <p className="text-slate-500 text-sm mb-2">{job.company} &bull; {job.location}</p>
            {job.salary && (
              <p className="text-green-700 text-sm font-medium mb-4">{job.salary}</p>
            )}
            <button className="w-full mt-2 border border-slate-200 text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              Details ansehen
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
