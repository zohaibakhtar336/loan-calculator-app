import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useCurrency } from '../context/CurrencyContext';
import { useEMICalculator } from '../hooks/useEMICalculator';

const EMIForm = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const { currency } = useCurrency();
  
  const { emi, calculateEMI } = useEMICalculator();

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEMI(loanAmount, interestRate, loanTenure);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>Calculate Your EMI</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Loan Amount"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <TextField
          label="Interest Rate (%)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <TextField
          label="Loan Tenure (Months)"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Calculate EMI
        </Button>
      </form>

      {emi && (
        <div>
          <Typography variant="h6" gutterBottom>EMI: {emi} {currency}</Typography>
        </div>
      )}
    </div>
  );
};

export default EMIForm;
