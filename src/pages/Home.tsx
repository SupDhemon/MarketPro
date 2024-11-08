import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ShoppingBag, TrendingUp, Award, BarChart3, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Maximize seus lucros no e-commerce
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-indigo-100">
              Calcule preços, margens e taxas com precisão para o Mercado Livre e Shopee.
              Nossa ferramenta ajuda você a tomar as melhores decisões para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/calculadora-mercado-livre"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Calculadora Mercado Livre
              </Link>
              <Link
                to="/calculadora-shopee"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                Calculadora Shopee
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplaces Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Maiores Marketplaces do Brasil</h2>
            <p className="text-xl text-gray-600">Conheça as principais plataformas e suas características</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2070"
                alt="Mercado Livre"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mercado Livre</h3>
                <p className="text-gray-600 mb-6">
                  Maior marketplace da América Latina, com milhões de compradores ativos.
                  Oferece diferentes tipos de anúncios e um sistema logístico próprio.
                </p>
                <Link
                  to="/mercado-livre"
                  className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070"
                alt="Shopee"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopee</h3>
                <p className="text-gray-600 mb-6">
                  Plataforma em rápido crescimento, conhecida por seus preços competitivos
                  e campanhas promocionais frequentes.
                </p>
                <Link
                  to="/shopee"
                  className="text-indigo-600 font-semibold hover:text-indigo-800"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por que usar nossa calculadora?</h2>
            <p className="text-xl text-gray-600">Ferramentas completas para seu sucesso no e-commerce</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Calculator className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Cálculos Precisos</h3>
              <p className="text-gray-600">
                Calcule preços, tarifas e margens de lucro com precisão absoluta.
                Considere todas as variáveis importantes para sua precificação.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BarChart3 className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Análise Completa</h3>
              <p className="text-gray-600">
                Compare diferentes cenários de preços e entenda o impacto
                das taxas e comissões no seu lucro final.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Decisões Inteligentes</h3>
              <p className="text-gray-600">
                Tome decisões baseadas em dados reais e atualizados sobre
                as políticas de cada marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Comece a otimizar suas vendas agora
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Use nossas calculadoras gratuitas e descubra o preço ideal para
            seus produtos em cada marketplace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/calculadora-mercado-livre"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Calcular para Mercado Livre
            </Link>
            <Link
              to="/calculadora-shopee"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Calcular para Shopee
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O que dizem nossos usuários</h2>
            <p className="text-xl text-gray-600">Vendedores que transformaram seus negócios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <Users className="h-8 w-8 text-indigo-600 mb-6" />
              <p className="text-gray-600 mb-6">
                "Com a calculadora, consegui definir preços mais competitivos e
                ainda assim manter uma margem de lucro saudável."
              </p>
              <p className="font-semibold">Maria Silva</p>
              <p className="text-sm text-gray-500">Vendedora no Mercado Livre</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <Users className="h-8 w-8 text-indigo-600 mb-6" />
              <p className="text-gray-600 mb-6">
                "Ferramenta essencial para quem quer vender online. Muito prática
                e fácil de usar."
              </p>
              <p className="font-semibold">João Santos</p>
              <p className="text-sm text-gray-500">Vendedor na Shopee</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <Users className="h-8 w-8 text-indigo-600 mb-6" />
              <p className="text-gray-600 mb-6">
                "Ajudou-me a entender melhor as taxas e comissões de cada
                plataforma. Recomendo!"
              </p>
              <p className="font-semibold">Ana Oliveira</p>
              <p className="text-sm text-gray-500">Vendedora em ambas plataformas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;