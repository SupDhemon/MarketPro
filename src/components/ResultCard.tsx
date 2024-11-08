import React from 'react';
import { CalculationResult } from '../types/calculator';

interface ResultCardProps {
  type: 'classic' | 'premium';
  data: CalculationResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ type, data }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className={`text-lg font-bold mb-4 ${type === 'classic' ? 'text-blue-600' : 'text-purple-600'}`}>
        {type === 'classic' ? 'Anúncio Clássico' : 'Anúncio Premium'}
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Preço Final:</span>
          <span className="text-xl font-bold">{formatCurrency(data.price)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Comissão ML:</span>
          <span>{formatCurrency(data.commission)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Lucro Estimado:</span>
          <span className="text-green-600">{formatCurrency(data.profit)}</span>
        </div>
        {data.fixedFee > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Taxa Fixa:</span>
            <span>{formatCurrency(data.fixedFee)}</span>
          </div>
        )}
        {data.shipping > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Frete:</span>
            <span>{formatCurrency(data.shipping)}</span>
          </div>
        )}
      </div>
    </div>
  );
};