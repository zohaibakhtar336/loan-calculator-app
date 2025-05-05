// src/hooks/useExchangeRates.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useExchangeRates = (baseCurrency = 'INR') => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Get the API key from .env
        const apiKey = import.meta.env.VITE_EXCHANGE_API_KEY;

        if (!apiKey) {
          console.error('API Key is missing');
          return;
        }

        // Fetch rates using your API key
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);

        if (res.status === 200) {
          setRates(res.data.rates);
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching exchange rates:', err);
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return { rates, loading };
};
