import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem } from '@mui/material';
import { useEMICalculator } from '../hooks/useEMICalculator';
import { useExchangeRates } from '../hooks/useExchangeRates';

const EMIForm = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('INR');

  const { emi } = useEMICalculator(principal, rate, tenure);
  const { rates, loading } = useExchangeRates(baseCurrency);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>Loan EMI Calculator</Typography>

      <TextField
        fullWidth
        label="Principal Amount"
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Annual Interest Rate (%)"
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Tenure (in months)"
        type="number"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
        margin="normal"
        required
      />

      <Select
        fullWidth
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
        margin="normal"
        sx={{ mt: 2 }}
      >
        <MenuItem value="INR">INR</MenuItem>
        <MenuItem value="USD">USD</MenuItem>
        <MenuItem value="EUR">EUR</MenuItem>
        <MenuItem value="GBP">GBP</MenuItem>
        <MenuItem value="JPY">JPY</MenuItem>
      </Select>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Calculate EMI
      </Button>

      {emi > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Your EMI: {emi.toFixed(2)} {baseCurrency}</Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>Converted EMI:</Typography>
          {!loading ? (
            Object.entries(rates).slice(0, 5).map(([currency, rate]) => (
              <Typography key={currency}>
                {currency}: {(emi * rate).toFixed(2)}
              </Typography>
            ))
          ) : (
            <Typography>Loading exchange rates...</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default EMIForm;
