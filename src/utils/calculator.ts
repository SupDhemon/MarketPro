export const calculateMLPrice = (
  cost: number,
  commission: number,
  desiredProfit: number,
  shippingCost: number = 0,
  isFreeShipping: boolean = false,
  taxRate: number = 0,
  otherFees: number = 0
): number | null => {
  const FIXED_FEE = 6;
  const MIN_FREE_FEE = 79;

  // Convert percentages to decimals
  const commissionRate = commission / 100;
  const profitRate = desiredProfit / 100;
  const taxRateDecimal = taxRate / 100;
  const otherFeesDecimal = otherFees / 100;

  // Total rate including all percentages
  const totalRate = commissionRate + taxRateDecimal + otherFeesDecimal + profitRate;

  if (!isFreeShipping) {
    // Calculate price without shipping
    const priceWithFixedFee = (cost + FIXED_FEE) / (1 - totalRate);
    const priceWithoutFixedFee = cost / (1 - totalRate);

    // If price is >= 79, don't add fixed fee
    return priceWithFixedFee >= MIN_FREE_FEE ? priceWithoutFixedFee : priceWithFixedFee;
  } else {
    // Calculate price with shipping
    const priceWithFixedFee = (cost + shippingCost + FIXED_FEE) / (1 - totalRate);
    
    // Return null if price with shipping and fixed fee >= 79
    if (priceWithFixedFee >= MIN_FREE_FEE) {
      return null;
    }
    
    return priceWithFixedFee;
  }
};

export const calculateCommission = (price: number, commissionRate: number): number => {
  return price * (commissionRate / 100);
};

export const calculateProfit = (
  price: number,
  cost: number,
  profitRate: number,
  fixedFee: number = 0,
  shipping: number = 0
): number => {
  return (price - cost - fixedFee - shipping) * (profitRate / 100);
};