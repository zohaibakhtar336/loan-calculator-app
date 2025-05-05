import { useState } from 'react';

export const useEMICalculator = () => {
  const [emi, setEmi] = useState(null);

  const calculateEMI = (loanAmount, interestRate, loanTenure) => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseInt(loanTenure);

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return { emi, calculateEMI };
};
