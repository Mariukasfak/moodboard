import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, CheckCircle, Phone } from 'lucide-react';
import FAQ from '../../components/FAQ';
import { elektronikosFAQ } from '../../data/faqData';

const Elektronika = () => {
  useEffect(() => {
    // Meta tags
    document.title = 'Elektronikos atliekų surinkimas ir utilizavimas Kaune | Transportuok.lt';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nemokamas elektronikos atliekų surinkimas ir perdirbimas Kaune. Kompiuterių, televizorių ir kitos elektronikos išvežimas. Saugus ir ekologiškas utilizavimas.');
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', 'Elektronikos atliekų surinkimas ir utilizavimas Kaune | Transportuok.lt');
    if (ogDescription) ogDescription.setAttribute('content', 'Profesionalus elektronikos atliekų surinkimas Kaune. Išvežame kompiuterius, televizorius ir kitą elektroniką. Nemokamas išvežimas.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://transportuok.lt/paslaugos/elektronikos-atlieku-isvezimas');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://transportuok.lt/paslaugos/elektronikos-atlieku-isvezimas');
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Elektronikos atliekų surinkimas Kaune
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionalus elektronikos atliekų išvežimas ir perdirbimas. 
            Rūpinamės saugiu ir ekologišku elektronikos atliekų tvarkymu.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* Paslaugos aprašymas */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Kokią elektroniką išvežame?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Kompiuterinė technika</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Stacionarūs kompiuteriai</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Nešiojami kompiuteriai</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Monitoriai</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Spausdintuvai</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Buitinė elektronika</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Televizoriai</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Garso aparatūra</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Telefonai ir planšetės</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span>Ir kitą stambią buitinę techniką</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Elektronikos atliekų tvarkymo procesas</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Surinkimas</h3>
                    <p className="text-gray-600">
                      Atvykstame į nurodytą vietą ir profesionaliai surenkame elektronikos atliekas.
                      Pasirūpiname saugiu įrangos transportavimu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rūšiavimas</h3>
                    <p className="text-gray-600">
                      Elektronikos atliekos rūšiuojamos pagal tipus ir medžiagas, 
                      užtikrinant efektyvų perdirbimo procesą.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Perdirbimas</h3>
                    <p className="text-gray-600">
                      Visos elektronikos atliekos perduodamos licencijuotiems perdirbėjams,
                      kurie užtikrina saugų ir ekologišką utilizavimą.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Mūsų privalumai</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Nemokamas išvežimas</h3>
                  <p className="text-gray-600">
                    Visą elektroniką išvežame nemokamai, nepriklausomai nuo jos kiekio.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Duomenų saugumas</h3>
                  <p className="text-gray-600">
                    Užtikriname saugų duomenų sunaikinimą iš kompiuterių ir kitų įrenginių.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Aplinkosauga</h3>
                  <p className="text-gray-600">
                    Laikomės visų ES aplinkosaugos reikalavimų ir standartų.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Patogus aptarnavimas</h3>
                  <p className="text-gray-600">
                    Dirbame visoje Kauno teritorijoje, prisitaikome prie jūsų grafiko.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Kontaktai */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Susisiekite</h2>
              <div className="space-y-4">
                <a 
                  href="tel:+37069925744"
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +370 699 25744
                </a>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  I-V: 8:00 - 18:00
                  <br />
                  VI: 9:00 - 15:00
                </div>
                <div className="flex items-center text-gray-600">
                  <Truck className="w-5 h-5 mr-2" />
                  Aptarnaujame visą Kauną
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Užsakyti išvežimą</h2>
              <p className="text-gray-600 mb-6">
                Užpildykite užklausą dabar ir gaukite nemokamą elektronikos atliekų išvežimą!
              </p>
              <Link
                to="/kontaktai#contact-form"
                className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Pateikti užklausą
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ 
          items={elektronikosFAQ}
          title="Dažniausiai užduodami klausimai apie elektronikos atliekų išvežimą"
          category="Elektronikos atliekų išvežimas"
        />
      </div>
    </div>
  );
};

export default Elektronika;