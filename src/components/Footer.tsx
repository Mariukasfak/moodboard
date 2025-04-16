import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const PaslaugosIcon = () => (
  <svg 
    xmlns="images\paslaugos.svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="lucide lucide-icon"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Transportuok.lt</h3>
            <p className="text-gray-400">
              Profesionalus buitinės technikos ir elektronikos atliekų išvežimas Kaune ir apylinkėse.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://facebook.com/transportuok.lt" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Sekite mus Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/transportuok.lt" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Sekite mus Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://paslaugos.lt/transportuoklt-ti412" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Mūsų profilis Paslaugos.lt"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <PaslaugosIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktai</h4>
            <div className="space-y-2">
              <a href="tel:+37069925744" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                +370 699 25744
              </a>
              <a href="mailto:info@transportuok.lt" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                info@transportuok.lt
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Kaunas, Lietuva
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigacija</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Pradžia</Link>
              <Link to="/paslaugos/buitines-technikos-isvezimas" className="block text-gray-400 hover:text-white">Buitinės technikos išvežimas</Link>
              <Link to="/paslaugos/elektronikos-atlieku-isvezimas" className="block text-gray-400 hover:text-white">Elektronikos išvežimas</Link>
              <Link to="/paslaugos/baldu-isvezimas" className="block text-gray-400 hover:text-white">Baldų išvežimas</Link>
              <Link to="/paslaugos/metalo-lauzo-isvezimas" className="block text-gray-400 hover:text-white">Metalo laužo išvežimas</Link>
              <Link to="/apie-mus" className="block text-gray-400 hover:text-white">Apie mus</Link>
              <Link to="/naujienos" className="block text-gray-400 hover:text-white">Naujienos</Link>
              <Link to="/kontaktai" className="block text-gray-400 hover:text-white">Kontaktai</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Darbo laikas</h4>
            <div className="space-y-2 text-gray-400">
              <p>Pirm - Penkt: 8:00 - 18:00</p>
              <p>Šešt: 9:00 - 15:00</p>
              <p>Sekm: Nedirbame</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Transportuok.lt. Visos teisės saugomos.</p>
          <small className="block mt-2 text-gray-500">
            Mūsų komandą aprengia <a href="https://siemka.lt" target="_blank" rel="noopener noreferrer" aria-label="Siemka.lt - marškinėliai ir džemperiai su spauda" className="text-green-500 hover:text-white transition-colors">Siemka.lt</a> – marškinėliai ir džemperiai su spauda
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;