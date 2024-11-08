import React, { useState } from 'react';
import { Barcode, Copy, RefreshCw } from 'lucide-react';

const EanGenerator = () => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);

  const generateCheckDigit = (code: string): number => {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(code[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit;
  };

  const generateEAN = () => {
    let code = '789';
    for (let i = 0; i < 9; i++) {
      code += Math.floor(Math.random() * 10);
    }
    
    const checkDigit = generateCheckDigit(code);
    const fullCode = code + checkDigit;
    
    setGeneratedCode(fullCode);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-8">
            <Barcode className="h-10 w-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Gerador de GTIN/EAN-13
              </h1>
              <p className="text-gray-600 mt-1">
                Gere códigos GTIN-13/EAN válidos para seus produtos
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-indigo-900 mb-3">
              O que é GTIN-13/EAN?
            </h2>
            <p className="text-indigo-800">
              GTIN-13 (anteriormente EAN-13) é um código de barras de 13 dígitos usado 
              globalmente para identificar produtos comerciais. No Brasil, esses códigos 
              começam com 789, seguidos por 9 dígitos e um dígito verificador.
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="bg-gray-50 rounded-lg p-8 mb-4">
                <p className="text-4xl font-mono font-bold tracking-wider text-gray-800">
                  {generatedCode || '0000000000000'}
                </p>
              </div>
              
              <div className="flex justify-center gap-4">
                <button
                  onClick={generateEAN}
                  className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Gerar Novo Código
                </button>
                
                <button
                  onClick={copyToClipboard}
                  disabled={!generatedCode}
                  className={`flex items-center px-6 py-3 ${
                    copied
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-600 hover:bg-gray-700'
                  } text-white rounded-lg transition-colors ${
                    !generatedCode && 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  <Copy className="h-5 w-5 mr-2" />
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informações Importantes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Os códigos gerados são matematicamente válidos e seguem o padrão GTIN-13
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Começam com 789 (prefixo do Brasil)
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Incluem dígito verificador calculado automaticamente
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  Podem ser usados para testes e desenvolvimento
                </li>
                <li className="flex items-start text-red-600">
                  <span className="font-bold mr-2">•</span>
                  Para uso comercial oficial, é necessário registro na GS1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EanGenerator;