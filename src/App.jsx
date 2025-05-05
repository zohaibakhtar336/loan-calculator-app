import React, { useEffect, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Header from './components/Header';
import EMIForm from './components/EMIForm';

const App = () => {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <Header />
        <h1>Loan Calculator App</h1>
        <EMIForm />
      </div>
    </MuiThemeProvider>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </ThemeProvider>
);

export default AppWrapper;