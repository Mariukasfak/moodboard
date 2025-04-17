import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import MissionSection from '../../components/MissionSection';
import JourneySection from '../../components/JourneySection';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState('daiktas');

  const selectItem = (item: string) => {
    setSelectedItem(item);
    // Slenka žemyn iki kelionės sekcijos
    document.getElementById('journey-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection onItemSubmit={selectItem} />
      
      {/* Daikto tipo pasirinkimas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Pasirinkite perdirbamo daikto tipą
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buitinė technika */}
            <div 
              className={`p-5 border rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg 
                ${selectedItem === 'buitinė technika' ? 'border-green-600 bg-green-50' : 'border-gray-200'}`}
              onClick={() => selectItem('buitinė technika')}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">❄️</span>
                <h3 className="text-xl font-semibold">Buitinė technika</h3>
              </div>
              <p className="text-gray-600 mb-4">Šaldytuvai, skalbimo mašinos, mikrobangų krosnelės ir kiti buitiniai prietaisai.</p>
              <button 
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                onClick={() => selectItem('buitinė technika')}
              >
                Žiūrėti kelionę
              </button>
            </div>
            
            {/* Elektronika */}
            <div 
              className={`p-5 border rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg 
                ${selectedItem === 'elektronika' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200'}`}
              onClick={() => selectItem('elektronika')}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📱</span>
                <h3 className="text-xl font-semibold">Elektronika</h3>
              </div>
              <p className="text-gray-600 mb-4">Telefonai, kompiuteriai, televizoriai ir kiti elektroniniai prietaisai.</p>
              <button 
                className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                onClick={() => selectItem('elektronika')}
              >
                Žiūrėti kelionę
              </button>
            </div>
            
            {/* Baldai */}
            <div 
              className={`p-5 border rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg 
                ${selectedItem === 'baldai' ? 'border-green-700 bg-green-50' : 'border-gray-200'}`}
              onClick={() => selectItem('baldai')}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🪑</span>
                <h3 className="text-xl font-semibold">Baldai</h3>
              </div>
              <p className="text-gray-600 mb-4">Stalai, kėdės, spintos, sofos ir kiti baldai iš namų ar biuro.</p>
              <button 
                className="w-full py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors"
                onClick={() => selectItem('baldai')}
              >
                Žiūrėti kelionę
              </button>
            </div>
            
            {/* Metalo laužas */}
            <div 
              className={`p-5 border rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg 
                ${selectedItem === 'metalo laužas' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
              onClick={() => selectItem('metalo laužas')}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔧</span>
                <h3 className="text-xl font-semibold">Metalo laužas</h3>
              </div>
              <p className="text-gray-600 mb-4">Metalinės konstrukcijos, įrankiai, automobilių dalys ir kiti metaliniai daiktai.</p>
              <button 
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => selectItem('metalo laužas')}
              >
                Žiūrėti kelionę
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Kelionės sekcija */}
      <div id="journey-section">
        <JourneySection item={selectedItem} />
      </div>
      
      <MissionSection />
    </div>
  );
}