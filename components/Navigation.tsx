import React, { useState } from 'react';
import { Menu, X, Hammer, HardHat } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Startseite', path: PageRoute.HOME },
    { name: 'Für Bewerber', path: PageRoute.EMPLOYEES },
    { name: 'Für Arbeitgeber', path: PageRoute.EMPLOYERS },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to={PageRoute.HOME} className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-amber-500 p-2 rounded-lg group-hover:bg-amber-600 transition-colors">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">
                  BAU<span className="text-amber-600">JOBS</span>
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wider">DEUTSCHLAND</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-amber-600 border-b-2 border-amber-600 pb-1'
                    : 'text-slate-600 hover:text-amber-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={PageRoute.EMPLOYERS}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg text-sm flex items-center gap-2"
            >
              <HardHat size={16} />
              Stelle schalten
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={PageRoute.EMPLOYERS}
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
            >
              Stelle schalten
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;