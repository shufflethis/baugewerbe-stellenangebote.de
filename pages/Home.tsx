import React from 'react';
import JobSearch from '../components/JobSearch';
import { Briefcase, TrendingUp, Users, Award, ChevronRight, CheckCircle2, ShieldCheck, HardHat, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { MOCK_JOBS } from '../constants';
import StadtLinks from '../components/geo/StadtLinks';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - compact on mobile */}
      <div className="relative bg-slate-900 h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Baustelle Hintergrund"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium text-xs md:text-sm mb-4 md:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Über 1.500 neue Jobs diese Woche
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-tight">
            Karriere bauen. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Zukunft gestalten.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
            Die führende Plattform für Fachkräfte im Hoch-, Tief- und Ausbau.
            Verbinden Sie sich mit Top-Arbeitgebern im deutschen Baugewerbe.
          </p>
        </div>
      </div>

      {/* Job Search - pulled up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-16 md:-mt-20 z-20 mb-8 md:mb-12">
        <JobSearch />
      </div>

      {/* Aktuelle Stellenangebote - Mobile First, Jobs at top */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-10 gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Aktuelle Baugewerbe Stellenangebote</h2>
            <Link to={PageRoute.EMPLOYEES} className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center gap-1">
              Alle {MOCK_JOBS.length}+ Jobs ansehen <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {MOCK_JOBS.slice(0, 6).map((job) => (
              <div key={job.id} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">{job.type}</span>
                  <span className="text-slate-400 text-xs">{job.postedAt}</span>
                </div>
                <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1 line-clamp-2">{job.title}</h3>
                <p className="text-slate-500 text-sm mb-1">{job.company}</p>
                <p className="text-slate-400 text-sm flex items-center gap-1 mb-3">
                  <MapPin size={14} /> {job.location}
                </p>
                <Link to={PageRoute.EMPLOYEES} className="block w-full text-center border border-slate-200 text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                  Details ansehen
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <Link to={PageRoute.EMPLOYEES} className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md text-sm md:text-base">
              Alle Stellenangebote anzeigen <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO / GEO Content Section: Branchenüberblick */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Das Baugewerbe im Wandel: Chancen 2025/2026</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
              Die Baubranche ist einer der stabilsten und wichtigsten Wirtschaftszweige Deutschlands. Trotz konjunktureller Schwankungen bleibt der Bedarf an qualifizierten Fachkräften, vom Bauhelfer bis zum Zivilingenieur, ungebrochen hoch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 md:mb-12 text-center">Beliebte Berufsfelder im Baugewerbe</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
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
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group cursor-pointer">
                <cat.icon className="h-6 w-6 md:h-8 md:w-8 text-amber-500 mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-sm md:text-base text-slate-900">{cat.title}</h3>
                <p className="text-xs md:text-sm text-slate-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geo SEO: Baugewerbe Jobs nach Stadt */}
      <StadtLinks />

      {/* Detailed Content / Content Hub for GEO */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-10 md:space-y-12">

              {/* Article 1 */}
              <article>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Warum eine Karriere im Baugewerbe?</h3>
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
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Gehaltsreport Baugewerbe 2025/2026: Was verdient man?</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Gehälter im Baugewerbe variieren stark nach Region, Qualifikation und Unternehmensgröße. Generell lässt sich jedoch ein positiver Trend verzeichnen.
                </p>

                <div className="overflow-x-auto border border-slate-200 rounded-lg mt-6">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Berufsbild</th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Einstieg (Brutto/Jahr)</th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Erfahren (Brutto/Jahr)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Bauingenieur/in</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">45.000 € - 52.000 €</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">65.000 € - 85.000 €+</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Bauleiter/in</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">50.000 € - 58.000 €</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">70.000 € - 95.000 €+</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Maurer/in</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">32.000 € - 38.000 €</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">42.000 € - 55.000 €</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Polier/in</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">48.000 € - 55.000 €</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">60.000 € - 75.000 €</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Zimmerer/in</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">30.000 € - 36.000 €</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">40.000 € - 52.000 €</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Dachdecker/in</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">28.000 € - 34.000 €</td>
                        <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-slate-600">38.000 € - 50.000 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">*Durchschnittswerte, können regional abweichen. Stand 2025/2026.</p>
              </article>

              {/* Article 3: Karrierewege */}
              <article>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Karrierewege im Baugewerbe: Vom Lehrling zum Bauleiter</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Das Baugewerbe bietet vielfältige Karrierepfade. Der klassische Weg führt über eine duale Ausbildung zum Gesellen, anschließend zum Meister oder Techniker und weiter in die Bauleitung oder Projektsteuerung.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: 'Ausbildung', desc: 'Duale Ausbildung in einem Bauberuf (2-3,5 Jahre). Berufe: Maurer, Zimmerer, Dachdecker, Straßenbauer, Betonbauer u.v.m.' },
                    { title: 'Gesellenbrief', desc: 'Nach bestandener Prüfung: Einstieg als Facharbeiter mit tariflichem Gehalt und guten Aufstiegschancen.' },
                    { title: 'Meister / Techniker', desc: 'Weiterbildung zum Meister oder staatlich geprüften Techniker. Voraussetzung für Führungspositionen und Selbstständigkeit.' },
                    { title: 'Bauleitung / Studium', desc: 'Bauingenieurstudium oder Aufstieg zum Bauleiter/Polier. Projektverantwortung und Gehälter über 70.000 EUR.' },
                  ].map((step, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{i + 1}</span>
                        <h4 className="font-bold text-slate-900">{step.title}</h4>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white sticky top-24">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Für Arbeitgeber</h3>
                <p className="text-slate-300 mb-6 text-sm md:text-base">
                  Suchen Sie qualifiziertes Personal? Erreichen Sie tausende Fachkräfte direkt aus Ihrer Region.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-amber-500 h-5 w-5 flex-shrink-0" /> In 2 Minuten online
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-amber-500 h-5 w-5 flex-shrink-0" /> Reichweite auf Partner-Portalen
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-amber-500 h-5 w-5 flex-shrink-0" /> Bewerber-Matching KI
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

      {/* FAQ Section with FAQPage Schema */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8 md:mb-12">Häufig gestellte Fragen zum Baugewerbe (FAQ)</h2>
          <div className="space-y-4 md:space-y-6">
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
                a: "Das Durchschnittsgehalt eines Bauleiters in Deutschland liegt zwischen 55.000 EUR und 75.000 EUR brutto im Jahr. Mit zunehmender Berufserfahrung und Personalverantwortung bei Großprojekten sind Gehälter über 90.000 EUR keine Seltenheit."
              },
              {
                q: "Welche Weiterbildungen lohnen sich im Baugewerbe?",
                a: "Besonders wertvoll sind der Meisterbrief, die Weiterbildung zum staatlich geprüften Techniker, BIM-Zertifizierungen sowie Fortbildungen im Bereich energetische Sanierung und nachhaltiges Bauen. Auch der Erwerb von Führerscheinklassen (CE, C) und Baumaschinenscheinen steigert die Chancen am Arbeitsmarkt erheblich."
              },
              {
                q: "Wie finde ich Baugewerbe Jobs in meiner Stadt?",
                a: "Auf baugewerbe-stellenangebote.de können Sie gezielt nach Stellenangeboten in Ihrer Stadt oder Region suchen. Nutzen Sie die Suchfunktion oben auf der Seite und geben Sie Ihren Wunschort ein. Wir listen aktuelle Baugewerbe-Stellenangebote in allen großen deutschen Städten wie Berlin, München, Hamburg, Köln, Frankfurt und vielen weiteren."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-slate-100">
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <span className="text-amber-500">?</span> {faq.q}
                </h3>
                <p className="text-slate-600 pl-6 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          {/* FAQ Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Welche Qualifikationen werden im Baugewerbe am meisten gesucht?",
                "acceptedAnswer": { "@type": "Answer", "text": "Aktuell besteht eine besonders hohe Nachfrage nach Bauleitern, Polieren sowie Fachhandwerkern in den Bereichen SHK (Sanitär, Heizung, Klima) und Elektroinstallation. Auch akademische Berufe wie Bauingenieure und Architekten mit BIM-Kenntnissen sind sehr gefragt." }
              },
              {
                "@type": "Question",
                "name": "Sind Quereinstiege in die Baubranche möglich?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ja, der Quereinstieg ist im Baugewerbe sehr gut möglich. Viele Unternehmen bieten Umschulungen an oder stellen Helfer ein, die sich durch Weiterbildungen qualifizieren können." }
              },
              {
                "@type": "Question",
                "name": "Wie sicher sind Jobs im Baugewerbe?",
                "acceptedAnswer": { "@type": "Answer", "text": "Die Baubranche gilt als systemrelevant und krisenfest. Der Investitionsstau in der Infrastruktur und die notwendige Energiewende im Gebäudesektor garantieren volle Auftragsbücher für die kommenden Jahrzehnte." }
              },
              {
                "@type": "Question",
                "name": "Was verdient ein Bauleiter im Durchschnitt?",
                "acceptedAnswer": { "@type": "Answer", "text": "Das Durchschnittsgehalt eines Bauleiters in Deutschland liegt zwischen 55.000 EUR und 75.000 EUR brutto im Jahr. Mit zunehmender Berufserfahrung und Personalverantwortung bei Großprojekten sind Gehälter über 90.000 EUR keine Seltenheit." }
              },
              {
                "@type": "Question",
                "name": "Welche Weiterbildungen lohnen sich im Baugewerbe?",
                "acceptedAnswer": { "@type": "Answer", "text": "Besonders wertvoll sind der Meisterbrief, die Weiterbildung zum staatlich geprüften Techniker, BIM-Zertifizierungen sowie Fortbildungen im Bereich energetische Sanierung und nachhaltiges Bauen." }
              },
              {
                "@type": "Question",
                "name": "Wie finde ich Baugewerbe Jobs in meiner Stadt?",
                "acceptedAnswer": { "@type": "Answer", "text": "Auf baugewerbe-stellenangebote.de können Sie gezielt nach Stellenangeboten in Ihrer Stadt oder Region suchen. Nutzen Sie die Suchfunktion und geben Sie Ihren Wunschort ein." }
              }
            ]
          }) }} />
        </div>
      </section>

      {/* Karriere-Info Baugewerbe */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Karriere im Baugewerbe: Alles was Sie wissen müssen</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              Das <strong>Baugewerbe in Deutschland</strong> beschäftigt über 900.000 Menschen und gehört damit zu den größten Wirtschaftszweigen des Landes. Die Branche umfasst das Bauhauptgewerbe (Hochbau, Tiefbau, Straßenbau) sowie das Ausbaugewerbe (Elektroinstallation, SHK, Trockenbau, Malerarbeiten). Beide Bereiche bieten hervorragende Berufsaussichten für Fachkräfte.
            </p>
            <p>
              <strong>Regionale Schwerpunkte:</strong> Die Bautätigkeit konzentriert sich auf Ballungsräume wie Berlin, München, Hamburg, Frankfurt am Main und das Rhein-Ruhr-Gebiet. Aber auch in ländlichen Regionen sorgt der Wohnungsbau und die Infrastrukturentwicklung für stetige Nachfrage nach Baufachkräften. Besonders in Süddeutschland (Bayern, Baden-Württemberg) liegen die Gehälter im Baugewerbe über dem Bundesdurchschnitt.
            </p>
            <p>
              <strong>Zukunftstrends:</strong> Die Digitalisierung der Baustelle mit BIM (Building Information Modeling), der Einsatz von Drohnen und 3D-Druck im Bau, sowie die Anforderungen der Energiewende (Wärmepumpen, Photovoltaik, energetische Gebäudesanierung) schaffen völlig neue Berufsbilder und Spezialisierungsmöglichkeiten. Wer sich in diesen Zukunftsfeldern weiterbildet, profitiert von überdurchschnittlichen Gehältern und hoher Arbeitsplatzsicherheit.
            </p>
            <p>
              <strong>Arbeitsbedingungen:</strong> Die Tarifverträge im Baugewerbe (BRTV) sichern faire Löhne, Urlaubsansprüche und Zusatzleistungen wie die Winterbauumlage. Viele Bauunternehmen bieten inzwischen 4-Tage-Wochen, Firmenwagen und umfangreiche Sozialleistungen an, um im Wettbewerb um Fachkräfte zu bestehen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Bereit für den nächsten Karriereschritt?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
            Finden Sie jetzt Ihren Traumjob im Baugewerbe oder rekrutieren Sie die besten Talente für Ihr Unternehmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={PageRoute.EMPLOYEES} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg text-sm md:text-base">
              Jobs finden
            </Link>
            <Link to={PageRoute.EMPLOYERS} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg text-sm md:text-base">
              Personal finden
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
