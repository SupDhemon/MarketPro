import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MercadoLibre from './pages/MercadoLibre';
import Shopee from './pages/Shopee';
import MLCalculator from './pages/MLCalculator';
import ShopeeCalculator from './pages/ShopeeCalculator';
import EanGenerator from './pages/EanGenerator';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mercado-livre" element={<MercadoLibre />} />
          <Route path="/shopee" element={<Shopee />} />
          <Route path="/calculadora-mercado-livre" element={<MLCalculator />} />
          <Route path="/calculadora-shopee" element={<ShopeeCalculator />} />
          <Route path="/gerador-ean" element={<EanGenerator />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;