import React from 'react';
import { ShoppingBag, Truck, BarChart, TrendingUp, DollarSign, Users, Calculator } from 'lucide-react';

function Shopee() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Venda na Shopee</h1>
              <p className="text-xl text-orange-100">Alcance milhões de compradores em uma das plataformas que mais crescem no Brasil</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://down-br.img.susercontent.com/file/br-50009109-2e3301fdd34755e5e0f48c608ba6fc16"
                alt="Shopee"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12">
          {/* Why Shopee */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Por que vender na Shopee?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TrendingUp className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Crescimento Rápido</h3>
                <p className="text-gray-600">
                  Uma das plataformas que mais crescem no Brasil, com milhões de usuários ativos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <DollarSign className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Campanhas Atrativas</h3>
                <p className="text-gray-600">
                  Promoções frequentes e campanhas de cashback que impulsionam as vendas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Base de Usuários</h3>
                <p className="text-gray-600">
                  Público jovem e engajado, com alto potencial de compras recorrentes.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Comissões e Benefícios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShoppingBag className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comissão Básica</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 14% por venda</li>
                  <li>• Limite de R$ 100 por item</li>
                  <li>• Taxa fixa de R$ 4</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Truck className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Frete Grátis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comissão: 14% + 6%</li>
                  <li>• Programa opcional</li>
                  <li>• Maior visibilidade</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <BarChart className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vantagens</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Campanhas promocionais</li>
                  <li>• Cupons personalizados</li>
                  <li>• Sistema de níveis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-orange-50 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Comece a Vender na Shopee</h2>
            <p className="text-gray-600 mb-6">
              Calcule seus preços e margens de lucro com nossa calculadora especializada!
            </p>
            <a
              href="/calculadora-shopee"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Acessar Calculadora
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Shopee;