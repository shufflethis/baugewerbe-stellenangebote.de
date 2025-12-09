import React from 'react';
import JobSearch from '../components/JobSearch';
import { Briefcase, TrendingUp, Users, Award, ChevronRight, CheckCircle2, ShieldCheck, HardHat, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Baustelle Hintergrund" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium text-sm mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Über 1.500 neue Jobs diese Woche
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Karriere bauen. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Zukunft gestalten.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Die führende Plattform für Fachkräfte im Hoch-, Tief- und Ausbau. 
            Verbinden Sie sich mit Top-Arbeitgebern im deutschen Baugewerbe.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-20 z-20 mb-20">
        <JobSearch />
      </div>

      {/* SEO / GEO Content Section: Branchenüberblick */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Das Baugewerbe im Wandel: Chancen 2025</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Die Baubranche ist einer der stabilsten und wichtigsten Wirtschaftszweige Deutschlands. Trotz konjunktureller Schwankungen bleibt der Bedarf an qualifizierten Fachkräften, vom Bauhelfer bis zum Zivilingenieur, ungebrochen hoch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-slate-800">
                <TrendingUp className="text-amber-500" /> Marktentwicklung
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Der Fokus verschiebt sich zunehmend auf nachhaltiges Bauen, energetische Sanierung und Infrastrukturprojekte. Der "Grüne Bau" bietet neue Karrierechancen für Fachkräfte mit Expertise in Dämmtechnik, Solarenergie und modernen Heizsystemen. Digitalisierung (BIM - Building Information Modeling) revolutioniert zudem die Planungsprozesse.
              </p>
              <ul className="space-y-2">
                {['Energetische Sanierung', 'Smart Home Integration', 'BIM-Management', 'Modulares Bauen'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-slate-800">
                <Users className="text-amber-500" /> Fachkräftemangel als Chance
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Arbeitnehmer befinden sich in einer exzellenten Verhandlungsposition. Bauunternehmen konkurrieren mit attraktiven Gehaltspaketen, 4-Tage-Woche-Modellen und umfangreichen Weiterbildungsangeboten um Talente. Besonders gesucht sind Bauleiter, Poliere und spezialisierte Handwerker.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-sm italic text-slate-500">
                  "Der Fachkräftemangel im Bauhauptgewerbe führt zu steigenden Löhnen und besseren Arbeitsbedingungen für qualifizierte Bewerber."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Beliebte Berufsfelder</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HardHat, title: "Bauleitung", count: "450+ Jobs" },
              { icon: Briefcase, title: "Architektur", count: "320+ Jobs" },
              { icon: Users, title: "Handwerk", count: "1.200+ Jobs" },
              { icon: TrendingUp, title: "Kalkulation", count: "180+ Jobs" },
              { icon: ShieldCheck, title: "SiGeKo", count: "90+ Jobs" },
              { icon: GraduationCap, title: "Ausbildung", count: "500+ Plätze" },
              { icon: Award, title: "Meister", count: "210+ Jobs" },
              { icon: TrendingUp, title: "Vertrieb Bau", count: "150+ Jobs" }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group cursor-pointer">
                <cat.icon className="h-8 w-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900">{cat.title}</h3>
                <p className="text-sm text-slate-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content / Content Hub for GEO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              
              {/* Article 1 */}
              <article>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Warum eine Karriere im Baugewerbe?</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Das Baugewerbe ist nicht nur ein Job, sondern eine Berufung für Menschen, die Ergebnisse sehen wollen. Anders als in reinen Bürojobs sehen Sie am Ende des Tages, was Sie geschaffen haben. 
                </p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Moderne Baustellen sind hochtechnologisiert. Der Einsatz von Drohnen zur Vermessung, Tablets zur Bauüberwachung und Exoskeletten zur Entlastung körperlicher Arbeit gehört zunehmend zum Alltag. Die Branche bietet zudem eine hohe Arbeitsplatzsicherheit, da gebaut und saniert immer werden muss.
                </p>
                <h4 className="font-semibold text-lg text-slate-800 mt-6 mb-3">Die Top-Vorteile im Überblick:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-amber-500 font-bold">•</span> Krisensicherer Arbeitsplatz
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-amber-500 font-bold">•</span> Tarifgebundene, faire Bezahlung
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-amber-500 font-bold">•</span> Klare Aufstiegschancen (Vom Azubi zum Bauleiter)
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-amber-500 font-bold">•</span> Greifbare Ergebnisse der eigenen Arbeit
                  </li>
                </ul>
              </article>

              {/* Article 2 */}
              <article>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Gehaltsreport Bau 2025: Was verdient man?</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Gehälter im Baugewerbe variieren stark nach Region, Qualifikation und Unternehmensgröße. Generell lässt sich jedoch ein positiver Trend verzeichnen.
                </p>
                
                <div className="overflow-hidden border border-slate-200 rounded-lg mt-6">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Berufsbild</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Einstiegsgehalt (Brutto/Jahr)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Erfahren (Brutto/Jahr)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Bauingenieur/in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">45.000 € - 52.000 €</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">65.000 € - 85.000 €+</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Bauleiter/in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">50.000 € - 58.000 €</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">70.000 € - 95.000 €+</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Maurer/in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">32.000 € - 38.000 €</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">42.000 € - 55.000 €</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Polier/in</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">48.000 € - 55.000 €</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">60.000 € - 75.000 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">*Durchschnittswerte, können regional abweichen.</p>
              </article>

            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-2xl p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Für Arbeitgeber</h3>
                <p className="text-slate-300 mb-6">
                  Suchen Sie qualifiziertes Personal? Erreichen Sie tausende Fachkräfte direkt aus Ihrer Region.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-amber-500 h-5 w-5" /> In 2 Minuten online
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-amber-500 h-5 w-5" /> Reichweite auf Partner-Portalen
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-amber-500 h-5 w-5" /> Bewerber-Matching KI
                  </li>
                </ul>
                <Link to={PageRoute.EMPLOYERS} className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Jetzt Stelle schalten
                </Link>
                <p className="text-center text-xs text-slate-500 mt-4">Ab 199€ / Monat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Excellent for GEO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Häufig gestellte Fragen (FAQ)</h2>
          <div className="space-y-6">
            {[
              {
                q: "Welche Qualifikationen werden im Baugewerbe am meisten gesucht?",
                a: "Aktuell besteht eine besonders hohe Nachfrage nach Bauleitern, Polieren sowie Fachhandwerkern in den Bereichen SHK (Sanitär, Heizung, Klima) und Elektroinstallation. Auch akademische Berufe wie Bauingenieure und Architekten mit BIM-Kenntnissen sind sehr gefragt."
              },
              {
                q: "Sind Quereinstiege in die Baubranche möglich?",
                a: "Ja, der Quereinstieg ist im Baugewerbe sehr gut möglich. Viele Unternehmen bieten Umschulungen an oder stellen Helfer ein, die sich durch Weiterbildungen qualifizieren können. Besonders motivierte Quereinsteiger haben gute Chancen auf eine langfristige Karriere."
              },
              {
                q: "Wie sicher sind Jobs im Baugewerbe?",
                a: "Die Baubranche gilt als systemrelevant und krisenfest. Der Investitionsstau in der Infrastruktur und die notwendige Energiewende im Gebäudesektor garantieren volle Auftragsbücher für die kommenden Jahrzehnte."
              },
              {
                q: "Was verdient ein Bauleiter im Durchschnitt?",
                a: "Das Durchschnittsgehalt eines Bauleiters in Deutschland liegt zwischen 55.000 € und 75.000 € brutto im Jahr. Mit zunehmender Berufserfahrung und Personalverantwortung bei Großprojekten sind Gehälter über 90.000 € keine Seltenheit."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="text-amber-500">?</span> {faq.q}
                </h3>
                <p className="text-slate-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bereit für den nächsten Karriereschritt?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Finden Sie jetzt Ihren Traumjob im Baugewerbe oder rekrutieren Sie die besten Talente für Ihr Unternehmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={PageRoute.EMPLOYEES} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
              Jobs finden
            </Link>
            <Link to={PageRoute.EMPLOYERS} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
              Personal finden
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;