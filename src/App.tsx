import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import ErrorBoundary from './components/ErrorBoundary';

// Pagrindinis puslapis
const Home = lazy(() => import('./pages/Home'));

// Paslaugų puslapiai
const BuitineTechnika = lazy(() => import('./pages/services/BuitineTechnika'));
const Elektronika = lazy(() => import('./pages/services/Elektronika'));
const Baldai = lazy(() => import('./pages/services/Baldai'));
const MetaloLauzas = lazy(() => import('./pages/services/MetaloLauzas'));

// Kiti puslapiai
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Naujienos = lazy(() => import('./pages/Naujienos'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Pagrindinis puslapis */}
                <Route path="/" element={<Home />} />

                {/* Paslaugų puslapiai */}
                <Route path="/paslaugos/buitines-technikos-isvezimas" element={<BuitineTechnika />} />
                <Route path="/paslaugos/elektronikos-atlieku-isvezimas" element={<Elektronika />} />
                <Route path="/paslaugos/baldu-isvezimas" element={<Baldai />} />
                <Route path="/paslaugos/metalo-lauzo-isvezimas" element={<MetaloLauzas />} />

                {/* Kiti puslapiai */}
                <Route path="/apie-mus" element={<About />} />
                <Route path="/kontaktai" element={<Contact />} />
                <Route path="/naujienos" element={<Naujienos />} />
                <Route path="/naujienos/:slug" element={<Naujienos />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;