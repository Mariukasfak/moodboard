import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Monitor, Touchpad as Couch, Recycle } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    // Update meta tags
    document.title = 'Buitinės technikos, baldų ir elektronikos išvežimas Kaune | Transportuok.lt';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Profesionalus buitinės technikos, baldų, elektronikos ir metalo laužo išvežimas Kaune. Nemokamas išvežimas, greitas aptarnavimas ir ekologiškas utilizavimas.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', 'Buitinės technikos, baldų ir elektronikos išvežimas Kaune | Transportuok.lt');
    if (ogDescription) ogDescription.setAttribute('content', 'Profesionalus buitinės technikos, baldų, elektronikos ir metalo laužo išvežimas Kaune. Nemokamas išvežimas ir ekologiškas utilizavimas.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://transportuok.lt/services');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://transportuok.lt/services');
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mūsų teikiamos paslaugos</h1>
          <p className="text-xl text-gray-600">Profesionalus ir ekologiškas atliekų išvežimas Kaune ir apylinkėse</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Truck className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Buitinės technikos išvežimas Kaune – nemokamai</h2>
            <div className="text-gray-600 space-y-4 mb-6">
              <p>
                Išvežame senus buities prietaisus: šaldytuvus, skalbimo mašinas, virykles, indaploves, džiovykles ir kt.
                Paslauga skirta tiek gyventojams, tiek įmonėms, kurie nori greitai atsikratyti nenaudojamos technikos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Išvežimas nemokamas
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Atliekos perduodamos licencijuotam perdirbėjui
                </li>
              </ul>
              <p className="font-medium">
                Susisiekite – viską sutvarkysime greitai ir atsakingai.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Gauti nemokamą išvežimą
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Monitor className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Elektronikos išvežimas Kaune – nemokamai</h2>
            <div className="text-gray-600 space-y-4 mb-6">
              <p>
                Surenkame įvairią mažą ir didelę elektroniką: kompiuterius, monitorius, spausdintuvus, garso kolonėles, mikrobangų krosneles ir kt.
                Tinka tiems, kas atsinaujina techniką ar tvarko namus / biurą.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Išvežame nemokamai
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Elektronikos atliekos utilizuojamos pagal ES reikalavimus
                </li>
              </ul>
              <p className="font-medium">
                Užpildykite užklausą internetu – atvyksime sutartu metu.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Pateikti užklausą
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Couch className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Baldų išvežimas Kaune – greitai ir patikimai</h2>
            <div className="text-gray-600 space-y-4 mb-6">
              <p>
                Išvežame įvairius nereikalingus baldus: sofas, lovas, čiužinius, spintas, stalus, kėdes ir kt.
                Paslauga skirta tiems, kas keičia baldus, kraustosi ar atnaujina namus.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Greitas išvežimas tiesiai iš namų
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Už mažą mokestį, priklausantį nuo daiktų kiekio
                </li>
              </ul>
              <p className="font-medium">
                Susisiekite dėl kainos – pasiūlymą pateiksime per 1 darbo dieną.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Gauti pasiūlymą
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Recycle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Metalo laužo išvežimas Kaune – nemokamai</h2>
            <div className="text-gray-600 space-y-4 mb-6">
              <p>
                Surenkame ir išvežame metalo atliekas: metalines duris, vamzdžius, radiatorius, konstrukcijas, tvoras, automobilių dalis ir kt.
                Aktualu tiems, kas tvarko kiemą, sandėlį ar renovuoja pastatą.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Išvežimas nemokamas
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Metalas saugiai pristatomas į perdirbimo aikšteles
                </li>
              </ul>
              <p className="font-medium">
                Parašykite mums – įvertinsime situaciją ir pasiūlysime sprendimą.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Gauti nemokamą išvežimą
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;