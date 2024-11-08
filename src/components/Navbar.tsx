import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ShoppingBag, Barcode, Menu, X, Store, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <ShoppingBag className="h-8 w-8 text-white" />
              <div className="text-white">
                <span className="text-xl font-bold block leading-none">MarketPro</span>
                <span className="text-sm text-indigo-200">Ferramentas & Insights</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/mercado-livre" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
              <Store className="h-4 w-4 mr-1" />
              Mercado Livre
            </Link>
            <Link to="/shopee" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Shopee
            </Link>
            <Link to="/calculadora-mercado-livre" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
              <Calculator className="h-4 w-4 mr-1" />
              Calc ML
            </Link>
            <Link to="/calculadora-shopee" className="text-white hover:text-indigo-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
              <Calculator className="h-4 w-4 mr-1" />
              Calc Shopee
            </Link>
            <Link to="/gerador-ean" className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
              <Barcode className="h-4 w-4 mr-1" />
              Gerador EAN
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              <Link
                to="/mercado-livre"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mercado Livre
              </Link>
              <Link
                to="/shopee"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shopee
              </Link>
              <Link
                to="/calculadora-mercado-livre"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculadora ML
              </Link>
              <Link
                to="/calculadora-shopee"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculadora Shopee
              </Link>
              <Link
                to="/gerador-ean"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gerador EAN
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;