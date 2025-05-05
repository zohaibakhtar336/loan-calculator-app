import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';

const App = () => {
  const { theme } = useTheme();

  return (
    <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <Header />
      </div>
    </MuiThemeProvider>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;