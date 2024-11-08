import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

function ShopeeCalculator() {
  const [values, setValues] = useState({
    freeShipping: 'false',
    productCost: '',
    taxRate: '0',
    otherFees: '0,00',
  });

  const formatNumber = (value: string) => {
    // Remove all characters except numbers, comma and period
    const cleanValue = value.replace(/[^\d,.]/g, '');
    // Replace comma with period for calculation
    return cleanValue.replace(',', '.');
  };

  const formatDisplay = (value: string) => {
    // Format number to display with comma as decimal separator
    return value.replace('.', ',');
  };

  const handleNumberInput = (value: string, field: keyof typeof values) => {
    // Allow only numbers, comma, and period
    const cleanValue = value.replace(/[^\d,.]/g, '');
    // Ensure only one decimal separator
    const parts = cleanValue.split(/[,.]/);
    if (parts.length > 2) {
      return;
    }
    setValues({ ...values, [field]: cleanValue });
  };

  const calculatePrice = () => {
    const cost = parseFloat(formatNumber(values.productCost)) || 0;
    const tax = parseFloat(formatNumber(values.taxRate)) / 100;
    const otherFees = parseFloat(formatNumber(values.otherFees)) / 100;
    const isFreeShipping = values.freeShipping === 'true';

    const commission = isFreeShipping ? 0.20 : 0.14;
    const fixedFee = 4;

    const totalRate = commission + tax + otherFees;
    const maxCommission = 100;

    const basePrice = (cost + fixedFee) / (1 - totalRate);
    
    const actualCommission = basePrice * commission;
    
    if (actualCommission > maxCommission) {
      return formatDisplay((cost + fixedFee + maxCommission).toFixed(2));
    }
    
    return formatDisplay(basePrice.toFixed(2));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-8">
            <Calculator className="h-8 w-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Calculadora Shopee
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Atributos para avaliação de preço e margem</h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual o custo do produto?
                </label>
                <input
                  type="text"
                  value={values.productCost}
                  onChange={(e) => handleNumberInput(e.target.value, 'productCost')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                  placeholder="0,00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Programa de Frete Grátis?
                </label>
                <select
                  value={values.freeShipping}
                  onChange={(e) => setValues({ ...values, freeShipping: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                >
                  <option value="false">Não (14% comissão)</option>
                  <option value="true">Sim (14% + 6% comissão)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alíquota de imposto (%)
                </label>
                <input
                  type="text"
                  value={values.taxRate}
                  onChange={(e) => handleNumberInput(e.target.value, 'taxRate')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Outras taxas (%)
                </label>
                <input
                  type="text"
                  value={values.otherFees}
                  onChange={(e) => handleNumberInput(e.target.value, 'otherFees')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                  placeholder="0,00"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-orange-100 p-4 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  Informações Importantes:
                </h3>
                <ul className="list-disc list-inside text-orange-800">
                  <li>Comissão base: 14%</li>
                  <li>Programa Frete Grátis: +6%</li>
                  <li>Taxa fixa: R$4 por item</li>
                  <li>Limite máximo de comissão: R$100 por item</li>
                </ul>
              </div>

              <div>
                <div className="bg-blue-700 text-white p-2 text-center">
                  Preço de venda sugerido
                </div>
                <div className="border p-4 text-center text-2xl font-bold">
                  R$ {calculatePrice()}
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-8">
                <p className="text-sm text-gray-600">
                  * O preço sugerido considera todas as taxas e custos informados, incluindo a taxa fixa de R$4 por item.
                  {values.freeShipping === 'true' && " Inclui taxa adicional de 6% do Programa de Frete Grátis."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopeeCalculator;