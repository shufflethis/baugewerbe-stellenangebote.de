// HR-UPDATER: v1.0
import React from 'react';

const Autorenbox: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 mt-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-sky-700 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
          TS
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-lg">Thomas Sander</h3>
          <p className="text-slate-500 text-sm">Gründer & Geschäftsführer</p>
          <p className="text-slate-400 text-xs">Social Media Venture GmbH</p>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        Thomas Sander ist der Gründer von baugewerbe-stellenangebote.de. Mit jahrelanger Erfahrung im
        Bereich Baugewerbe und Personalwesen hat er dieses spezialisierte Jobportal
        ins Leben gerufen, um Arbeitgeber und qualifizierte Fachkräfte zusammenzubringen.
      </p>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href="https://baugewerbe-stellenangebote.de/#/autor/thomas-sander"
          className="text-sky-600 hover:text-sky-700 font-medium"
        >
          Mehr über den Autor
        </a>
        <span className="text-slate-300">|</span>
        <a
          href="https://de.linkedin.com/in/thomas-sander-520676303"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-700 font-medium flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Autorenbox;
