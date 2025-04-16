import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Calendar, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleRegistrationClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/ikona_spalvotas.svg"
                alt="Transportuok.lt logotipas"
                className="h-8 w-8"
                width="32"
                height="32"
              />
              <span className="text-lg sm:text-xl font-bold text-green-700 ml-2">Transportuok.lt</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Pradžia
            </Link>
            <div className="relative group">
              <span className={`${location.pathname.includes('/paslaugos/') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors cursor-pointer`}>
                Paslaugos
              </span>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link 
                    to="/paslaugos/buitines-technikos-isvezimas" 
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Buitinės technikos išvežimas
                  </Link>
                  <Link 
                    to="/paslaugos/elektronikos-atlieku-isvezimas" 
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Elektronikos atliekų išvežimas
                  </Link>
                  <Link 
                    to="/paslaugos/baldu-isvezimas" 
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Baldų išvežimas
                  </Link>
                  <Link 
                    to="/paslaugos/metalo-lauzo-isvezimas" 
                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-700"
                  >
                    Metalo laužo išvežimas
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/apie-mus" 
              className={`${isActive('/apie-mus') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Apie mus
            </Link>
            <Link 
              to="/naujienos" 
              className={`${isActive('/naujienos') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Naujienos
            </Link>
            <Link 
              to="/kontaktai" 
              className={`${isActive('/kontaktai') ? 'text-green-700 font-semibold' : 'text-gray-800'} hover:text-green-700 transition-colors`}
            >
              Kontaktai
            </Link>

            {/* Booking options */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+37069925744" 
                className="flex items-center px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">+370 699 25744</span>
              </a>
              <Link
                to="/kontaktai#contact-form"
                onClick={handleRegistrationClick}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Registracija internetu
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-green-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Pradžia
            </Link>
            <div className="space-y-1 pl-3">
              <div className="px-3 py-2 text-base font-medium text-gray-800">Paslaugos:</div>
              <Link 
                to="/paslaugos/buitines-technikos-isvezimas" 
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Buitinės technikos išvežimas
              </Link>
              <Link 
                to="/paslaugos/elektronikos-atlieku-isvezimas" 
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Elektronikos atliekų išvežimas
              </Link>
              <Link 
                to="/paslaugos/baldu-isvezimas" 
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Baldų išvežimas
              </Link>
              <Link 
                to="/paslaugos/metalo-lauzo-isvezimas" 
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Metalo laužo išvežimas
              </Link>
            </div>
            <Link 
              to="/apie-mus" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/apie-mus') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Apie mus
            </Link>
            <Link 
              to="/naujienos" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/naujienos') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Naujienos
            </Link>
            <Link 
              to="/kontaktai" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/kontaktai') ? 'text-green-700 bg-green-50' : 'text-gray-800 hover:text-green-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Kontaktai
            </Link>

            {/* Mobile booking options */}
            <div className="px-3 py-2 space-y-2">
              <a 
                href="tel:+37069925744" 
                className="flex items-center justify-center w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">+370 699 25744</span>
              </a>
              <Link
                to="/kontaktai#contact-form"
                onClick={handleRegistrationClick}
                className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Registracija internetu
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;