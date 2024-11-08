import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <div className="ml-2">
                <span className="text-xl font-bold block">MarketPro</span>
                <span className="text-sm text-indigo-400">Ferramentas & Insights</span>
              </div>
            </div>
            <p className="mt-2 text-gray-400">
              Sua fonte completa de ferramentas e conhecimento para o sucesso em marketplaces.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mercado-livre" className="text-gray-400 hover:text-indigo-400">
                  Guia Mercado Livre
                </Link>
              </li>
              <li>
                <Link to="/shopee" className="text-gray-400 hover:text-indigo-400">
                  Guia Shopee
                </Link>
              </li>
              <li>
                <Link to="/calculadora-mercado-livre" className="text-gray-400 hover:text-indigo-400">
                  Calculadora ML
                </Link>
              </li>
              <li>
                <Link to="/calculadora-shopee" className="text-gray-400 hover:text-indigo-400">
                  Calculadora Shopee
                </Link>
              </li>
              <li>
                <Link to="/gerador-ean" className="text-gray-400 hover:text-indigo-400">
                  Gerador EAN
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">reis.tiago444@icloud.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">(19) 99167-8439</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MarketPro - Ferramentas & Insights. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;