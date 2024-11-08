export interface CalculationResult {
  price: number;
  commission: number;
  profit: number;
  shipping: number;
  fixedFee: number;
}

export interface CalculatorValues {
  productCost: string;
  classicCommission: string;
  premiumCommission: string;
  desiredProfit: string;
  isFreeShipping: boolean;
  shippingCost: string;
  taxRate: string;
  otherFees: string;
}

export interface AttentionResult {
  attention: true;
  type: 'classic' | 'premium';
}

export type ResultType = CalculationResult | AttentionResult;

export interface CalculatorResults {
  classic: ResultType;
  premium: ResultType;
}