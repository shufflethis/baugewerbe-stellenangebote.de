import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import { PageRoute } from './types';

// Placeholder components for routes not fully implemented in this demo
const EmployerPage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">Für Arbeitgeber</h1>
    <p className="text-xl text-slate-600">Hier können Unternehmen Stellenanzeigen schalten und Talente finden.</p>
    <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-slate-100 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Anzeige schalten</h2>
      <p className="mb-6">Kontaktieren Sie uns für individuelle Pakete.</p>
      <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-bold">Kontakt aufnehmen</button>
    </div>
  </div>
);

const EmployeePage = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold text-slate-900 mb-4">Für Bewerber</h1>
    <p className="text-xl text-slate-600">Durchsuchen Sie tausende offene Stellen im Baugewerbe.</p>
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-left hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">Vollzeit</span>
                    <span className="text-slate-400 text-sm">Vor 2 Tagen</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Bauleiter Hochbau (m/w/d)</h3>
                <p className="text-slate-500 text-sm mb-4">Müller Bau GmbH • Berlin</p>
                <button className="w-full mt-2 border border-slate-200 text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition-colors">Details ansehen</button>
            </div>
        ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.EMPLOYERS} element={<EmployerPage />} />
            <Route path={PageRoute.EMPLOYEES} element={<EmployeePage />} />
            <Route path={PageRoute.IMPRESSUM} element={<Impressum />} />
            <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;