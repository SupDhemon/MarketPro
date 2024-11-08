import React, { useState, useEffect } from 'react';
import { Calculator, AlertCircle, HelpCircle } from 'lucide-react';
import { ResultCard } from '../components/ResultCard';
import { calculateMLPrice, calculateCommission, calculateProfit } from '../utils/calculator';
import type { CalculatorValues, CalculatorResults, ResultType, AttentionResult, CalculationResult } from '../types/calculator';

function MLCalculator() {
  const [values, setValues] = useState<CalculatorValues>({
    productCost: '',
    classicCommission: '',
    premiumCommission: '',
    desiredProfit: '0',
    isFreeShipping: false,
    shippingCost: '',
    taxRate: '0',
    otherFees: '0'
  });

  const [results, setResults] = useState<CalculatorResults>({
    classic: { price: 0, commission: 0, profit: 0, shipping: 0, fixedFee: 0 },
    premium: { price: 0, commission: 0, profit: 0, shipping: 0, fixedFee: 0 }
  });

  const handleInputChange = (field: keyof CalculatorValues, value: string | boolean) => {
    if (typeof value === 'string') {
      // Allow both comma and period as decimal separators
      const sanitizedValue = value.replace(/[^\d,\.]/g, '').replace(',', '.');
      setValues(prev => ({ ...prev, [field]: sanitizedValue }));
    } else {
      setValues(prev => ({ ...prev, [field]: value }));
    }
  };

  const calculateResults = () => {
    const cost = parseFloat(values.productCost.replace(',', '.')) || 0;
    const desiredProfit = parseFloat(values.desiredProfit.replace(',', '.')) || 0;
    const shippingCost = parseFloat(values.shippingCost.replace(',', '.')) || 0;
    const taxRate = parseFloat(values.taxRate.replace(',', '.')) || 0;
    const otherFees = parseFloat(values.otherFees.replace(',', '.')) || 0;
    const FIXED_FEE = 6;
    const MIN_FREE_FEE = 79;

    // Classic calculation
    const classicCommission = parseFloat(values.classicCommission.replace(',', '.'));
    const classicPrice = calculateMLPrice(
      cost,
      classicCommission,
      desiredProfit,
      shippingCost,
      values.isFreeShipping,
      taxRate,
      otherFees
    );

    // Premium calculation
    const premiumCommission = parseFloat(values.premiumCommission.replace(',', '.'));
    const premiumPrice = calculateMLPrice(
      cost,
      premiumCommission,
      desiredProfit,
      shippingCost,
      values.isFreeShipping,
      taxRate,
      otherFees
    );

    const newResults: CalculatorResults = {
      classic: classicPrice === null ? 
        { attention: true, type: 'classic' } : 
        {
          price: classicPrice,
          commission: calculateCommission(classicPrice, classicCommission),
          profit: calculateProfit(classicPrice, cost, desiredProfit),
          shipping: values.isFreeShipping ? shippingCost : 0,
          fixedFee: classicPrice < MIN_FREE_FEE ? FIXED_FEE : 0
        },
      premium: premiumPrice === null ? 
        { attention: true, type: 'premium' } : 
        {
          price: premiumPrice,
          commission: calculateCommission(premiumPrice, premiumCommission),
          profit: calculateProfit(premiumPrice, cost, desiredProfit),
          shipping: values.isFreeShipping ? shippingCost : 0,
          fixedFee: premiumPrice < MIN_FREE_FEE ? FIXED_FEE : 0
        }
    };

    setResults(newResults);
  };

  useEffect(() => {
    calculateResults();
  }, [values]);

  const renderResult = (type: 'classic' | 'premium', result: ResultType) => {
    if ('attention' in result) {
      return (
        <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">
            Atenção - Anúncio {type === 'classic' ? 'Clássico' : 'Premium'}
          </h3>
          <p className="text-yellow-700">
            O preço calculado com frete grátis ultrapassa R$ 79,00. 
            Ajuste os valores para um cálculo preciso.
          </p>
        </div>
      );
    }
    return <ResultCard type={type} data={result} />;
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Calculator className="h-10 w-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calculadora Mercado Livre</h1>
              <p className="text-gray-600 mt-1">Calcule preços e margens para anúncios clássicos e premium</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-indigo-900">Informações Importantes</h3>
                    <p className="text-sm text-indigo-800 mt-1">
                      • Taxa fixa de R$ 6,00 para produtos abaixo de R$ 79,00
                      <br />
                      • Produtos acima de R$ 79,00 não pagam taxa fixa
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custo do Produto
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">R$</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={values.productCost}
                    onChange={(e) => handleInputChange('productCost', e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    placeholder="0,00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comissão Clássico (%)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={values.classicCommission}
                  onChange={(e) => handleInputChange('classicCommission', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  placeholder="Digite a comissão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comissão Premium (%)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={values.premiumCommission}
                  onChange={(e) => handleInputChange('premiumCommission', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  placeholder="Digite a comissão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Margem de Lucro Desejada (%)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={values.desiredProfit}
                  onChange={(e) => handleInputChange('desiredProfit', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taxa de Imposto (%)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={values.taxRate}
                  onChange={(e) => handleInputChange('taxRate', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Outras Taxas (%)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={values.otherFees}
                  onChange={(e) => handleInputChange('otherFees', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={values.isFreeShipping}
                    onChange={(e) => handleInputChange('isFreeShipping', e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">Incluir Frete Grátis</span>
                </label>
              </div>

              {values.isFreeShipping && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custo do Frete
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">R$</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={values.shippingCost}
                      onChange={(e) => handleInputChange('shippingCost', e.target.value)}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                      placeholder="0,00"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {renderResult('classic', results.classic)}
              {renderResult('premium', results.premium)}
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-900">Dicas de Precificação</h3>
                    <p className="text-sm text-yellow-800 mt-1">
                      • Considere os preços da concorrência
                      <br />
                      • Avalie o custo-benefício do anúncio premium
                      <br />
                      • Monitore suas margens regularmente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MLCalculator;