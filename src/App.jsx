import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import PosEcosystem from './pages/PosEcosystem';
import DmsEcosystem from './pages/DmsEcosystem';
import BaytAlMal from './pages/BaytAlMal';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

// Scroll to top helper on page change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is an active hash (like #nectar), we let the component handle the scrolling
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Scroll configuration */}
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Pages router */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/pos" element={<PosEcosystem />} />
          <Route path="/products/dms" element={<DmsEcosystem />} />
          <Route path="/products/bayt-al-mal" element={<BaytAlMal />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </main>

      {/* Global Directory Footer */}
      <Footer />
    </div>
  );
}
