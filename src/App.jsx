import React from 'react';
import { Typography, Container } from '@mui/material';

const App = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Loan Calculator
      </Typography>
    </Container>
  );
};

export default App;