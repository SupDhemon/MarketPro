import React from 'react';
import { ShoppingBag, DollarSign, Truck, TrendingUp, Award, Users, Calculator } from 'lucide-react';

function MercadoLibre() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Como Vender no Mercado Livre</h1>
              <p className="text-xl text-yellow-50">Tudo o que você precisa saber para vender com sucesso</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://dcdn.mitiendanube.com/stores/002/514/088/products/consultoria-para-vender-no-mercado-livre-jcl-solucoes-em-e-commerce21-032bd2c1d68693e95216937641098542-640-0.png"
                alt="Mercado Livre"
                className="rounded-lg shadow-lg max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Por que vender no Mercado Livre?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TrendingUp className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Maior Marketplace</h3>
                <p className="text-gray-600">
                  Acesso ao maior marketplace da América Latina, com milhões de compradores ativos diariamente.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Credibilidade</h3>
                <p className="text-gray-600">
                  Plataforma reconhecida e confiável, que transmite segurança para seus compradores.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Grande Alcance</h3>
                <p className="text-gray-600">
                  Exposição para milhões de usuários em todo o Brasil e América Latina.
                </p>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Como Funciona a Venda</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShoppingBag className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tipos de Anúncio</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clássico (13% de comissão)</li>
                  <li>• Premium (18% de comissão)</li>
                  <li>• Exposição diferenciada</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <DollarSign className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pagamentos</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mercado Pago integrado</li>
                  <li>• Parcelamento em até 12x</li>
                  <li>• Repasse rápido</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Truck className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Envios</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mercado Envios</li>
                  <li>• Frete grátis estratégico</li>
                  <li>• Etiquetas integradas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-yellow-50 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Comece a Vender Agora</h2>
            <p className="text-gray-600 mb-6">
              Use nossa calculadora para definir os melhores preços e maximizar seus lucros!
            </p>
            <a
              href="/calculadora-mercado-livre"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
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

export default MercadoLibre;