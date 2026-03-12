import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { Hammer, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-amber-500 p-1.5 rounded text-white">
                <Hammer size={20} />
              </div>
              <span className="font-bold text-xl text-white">
                BAU<span className="text-amber-500">JOBS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              Die spezialisierte Plattform für Fach- und Führungskräfte im deutschen Baugewerbe. Wir verbinden Kompetenz mit Qualität.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-400">Social Media Venture GmbH</p>
              <p>Schliemannstraße 23, 10437 Berlin</p>
              <p>GF: Thomas Sander</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Für Bewerber</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to={PageRoute.EMPLOYEES} className="hover:text-amber-500 transition-colors">Alle Stellenangebote</Link></li>
              <li><Link to={PageRoute.HOME} className="hover:text-amber-500 transition-colors">Karriere-Ratgeber</Link></li>
              <li><Link to={PageRoute.HOME} className="hover:text-amber-500 transition-colors">Gehaltsvergleich Bau</Link></li>
              <li><Link to={PageRoute.EMPLOYEES} className="hover:text-amber-500 transition-colors">Jobs nach Stadt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Für Arbeitgeber</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to={PageRoute.EMPLOYERS} className="hover:text-amber-500 transition-colors">Stellenanzeige aufgeben</Link></li>
              <li><Link to={PageRoute.EMPLOYERS} className="hover:text-amber-500 transition-colors">Preise & Konditionen</Link></li>
              <li><Link to={PageRoute.EMPLOYERS} className="hover:text-amber-500 transition-colors">Talent-Datenbank</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Kontakt & Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-500 flex-shrink-0" /> Schliemannstr. 23, 10437 Berlin
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-amber-500 flex-shrink-0" /> info@socialmediaventure.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-amber-500 flex-shrink-0" /> +49 30 959 988 700
              </li>
              <li><Link to="/impressum" className="hover:text-white text-slate-400 transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white text-slate-400 transition-colors">Datenschutz</Link></li>
              <li><Link to="/autor/thomas-sander" className="hover:text-white text-slate-400 transition-colors">Über den Autor</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} baugewerbe-stellenangebote.de | Social Media Venture GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://de.linkedin.com/in/thomas-sander-520676303" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
