import React from 'react';
import { MapPin } from 'lucide-react';

const BAUGEWERBE_STAEDTE = [
  { name: 'Berlin', region: 'Berlin', jobs: '85+' },
  { name: 'München', region: 'Bayern', jobs: '120+' },
  { name: 'Hamburg', region: 'Hamburg', jobs: '75+' },
  { name: 'Köln', region: 'NRW', jobs: '60+' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: '70+' },
  { name: 'Stuttgart', region: 'Baden-Württemberg', jobs: '65+' },
  { name: 'Düsseldorf', region: 'NRW', jobs: '50+' },
  { name: 'Leipzig', region: 'Sachsen', jobs: '40+' },
  { name: 'Dortmund', region: 'NRW', jobs: '35+' },
  { name: 'Essen', region: 'NRW', jobs: '30+' },
  { name: 'Bremen', region: 'Bremen', jobs: '25+' },
  { name: 'Dresden', region: 'Sachsen', jobs: '35+' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: '40+' },
  { name: 'Nürnberg', region: 'Bayern', jobs: '45+' },
  { name: 'Duisburg', region: 'NRW', jobs: '25+' },
  { name: 'Bochum', region: 'NRW', jobs: '20+' },
  { name: 'Wuppertal', region: 'NRW', jobs: '18+' },
  { name: 'Bielefeld', region: 'NRW', jobs: '22+' },
  { name: 'Bonn', region: 'NRW', jobs: '28+' },
  { name: 'Mannheim', region: 'Baden-Württemberg', jobs: '30+' },
  { name: 'Karlsruhe', region: 'Baden-Württemberg', jobs: '25+' },
  { name: 'Augsburg', region: 'Bayern', jobs: '20+' },
  { name: 'Wiesbaden', region: 'Hessen', jobs: '22+' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: '15+' },
  { name: 'Erfurt', region: 'Thüringen', jobs: '18+' },
  { name: 'Mainz', region: 'Rheinland-Pfalz', jobs: '20+' },
  { name: 'Kassel', region: 'Hessen', jobs: '15+' },
  { name: 'Freiburg', region: 'Baden-Württemberg', jobs: '18+' },
  { name: 'Regensburg', region: 'Bayern', jobs: '15+' },
  { name: 'Potsdam', region: 'Brandenburg', jobs: '12+' },
];

const StadtLinks: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Baugewerbe Stellenangebote nach Stadt</h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Finden Sie aktuelle Jobs im Baugewerbe in Ihrer Region. Wir listen Stellenangebote aus allen großen Städten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {BAUGEWERBE_STAEDTE.map((stadt) => (
            <div
              key={stadt.name}
              className="bg-white rounded-lg p-3 md:p-4 border border-slate-100 hover:border-amber-300 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">{stadt.name}</p>
                  <p className="text-xs text-slate-400">{stadt.region}</p>
                  <p className="text-xs text-amber-600 font-medium mt-1">{stadt.jobs} Jobs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-6 md:mt-8">
          Baugewerbe Stellenangebote in allen Regionen Deutschlands: Bayern, Nordrhein-Westfalen, Baden-Württemberg, Niedersachsen, Hessen, Sachsen, Berlin, Hamburg, Rheinland-Pfalz, Schleswig-Holstein, Brandenburg, Thüringen, Sachsen-Anhalt, Mecklenburg-Vorpommern, Saarland und Bremen.
        </p>
      </div>
    </section>
  );
};

export default StadtLinks;
