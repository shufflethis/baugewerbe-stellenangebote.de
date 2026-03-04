import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Impressum from './pages/Impressum';
import { PageRoute } from './types';
import Datenschutz from './pages/Datenschutz';
import AutorSeite from './pages/AutorSeite';

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

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.EMPLOYERS} element={<EmployerPage />} />
            <Route path={PageRoute.EMPLOYEES} element={<Employees />} />
            <Route path={PageRoute.IMPRESSUM} element={<Impressum />} />
            <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
                    {/* // HR-UPDATER: v1.0 */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/autor/thomas-sander" element={<AutorSeite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;