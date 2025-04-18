import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, CheckCircle, Phone } from 'lucide-react';
import FAQ from '../../components/FAQ';
import { buitinesTechnikosFAQ } from '../../data/faqData';
import ServiceSchema from '../../components/ServiceSchema';
import SEO from '../../components/SEO';

const BuitineTechnika = () => {
  const canonicalUrl = 'https://transportuok.lt/paslaugos/buitines-technikos-isvezimas';
  
  const serviceProvider = {
    name: "Transportuok.lt",
    url: "https://transportuok.lt",
    logo: "/ikona_spalvotas.svg",
    telephone: "+37069925744",
    address: {
      streetAddress: "Kauno g.",
      addressLocality: "Kaunas",
      postalCode: "44000",
      addressCountry: "LT"
    }
  };

  return (
    <>
      <SEO
        title="Nemokamas buitinės technikos išvežimas Kaune | Transportuok.lt"
        description="Nemokamas šaldytuvų, skalbimo mašinų, viryklių išvežimas Kaune. Profesionalus ir greitas aptarnavimas, ekologiškas utilizavimas. Užsakykite išvežimą dabar!"
        canonicalUrl={canonicalUrl}
      />
      
      <ServiceSchema
        name="Buitinės technikos išvežimas"
        description="Nemokamas šaldytuvų, skalbimo mašinų ir kitų buitinių prietaisų išvežimas Kaune. Greitas ir patikimas aptarnavimas."
        provider={serviceProvider}
        areaServed="Kaunas"
      />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nemokamas buitinės technikos išvežimas Kaune
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionalus ir greitas buitinės technikos išvežimas visame Kauno mieste. 
              Išvežame šaldytuvus, skalbimo mašinas, virykles ir kitą buitinę techniką nemokamai.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              {/* Paslaugos aprašymas */}
              <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Kokią buitinę techniką išvežame?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Virtuvės technika</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Šaldytuvai ir šaldikliai</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Viryklės ir orkaitės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Indaplovės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Mikrobangų krosnelės</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Skalbimo technika</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Skalbimo mašinos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Džiovyklės</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Skalbimo-džiovinimo mašinos</span>
                      </li>
                                            <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span>Ir kiti elektronikos prietaisai</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Kaip vyksta išvežimas?</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Užklausos pateikimas</h3>
                      <p className="text-gray-600">
                        Užpildykite užklausos formą arba paskambinkite mums. 
                        Nurodykite, kokią techniką reikia išvežti ir savo kontaktinius duomenis.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Susitarimas dėl laiko</h3>
                      <p className="text-gray-600">
                        Susisieksime su jumis per 24 valandas ir sutarsime jums patogų išvežimo laiką.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Išvežimas</h3>
                      <p className="text-gray-600">
                        Atvyksime sutartu laiku, profesionaliai išnešime ir išvešime techniką.
                        Jums nereikia rūpintis technikos atjungimu ar išnešimu.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Kodėl verta rinktis mus?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Nemokamas išvežimas</h3>
                    <p className="text-gray-600">
                      Visą buitinę techniką išvežame nemokamai, nepriklausomai nuo jos dydžio ar kiekio.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Profesionalus aptarnavimas</h3>
                    <p className="text-gray-600">
                      Mūsų komanda turi ilgametę patirtį ir visus reikiamus įrankius saugiam technikos išvežimui.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Ekologiškas utilizavimas</h3>
                    <p className="text-gray-600">
                      Visa išvežta technika perduodama licencijuotiems perdirbėjams ir utilizuojama pagal ES standartus.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Greitas aptarnavimas</h3>
                    <p className="text-gray-600">
                      Išvežimą organizuojame per 1-2 darbo dienas nuo užklausos gavimo.
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
                  Užpildykite užklausą dabar ir gaukite nemokamą buitinės technikos išvežimą!
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
        </div>
        
        <FAQ 
          items={buitinesTechnikosFAQ}
          title="Dažniausiai užduodami klausimai apie buitinės technikos išvežimą"
          category="Buitinės technikos išvežimas"
        />
      </div>
    </>
  );
};

export default BuitineTechnika;