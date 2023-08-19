import React from 'react';

import CardUploader from './components/cardUploader/CardUploader';
import Footer from './components/footer/Footer.tsx';

import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          height: '95vh', mt: 8
        }}
      >
        <CardUploader />
        <Box sx={{ mt: 18 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default App;