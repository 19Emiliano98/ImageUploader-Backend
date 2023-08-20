import React, { useState } from 'react';

import CardUploader from './components/cardUploader/CardUploader';
import Footer from './components/footer/Footer.tsx';

import LoadingCard from './components/loadingCard/LoadingCard.tsx';
//import CardConfirmation from './components/cardConfirmation/CardConfirmation.tsx';

import { Box } from '@mui/material';

/* const uploadImagesZone = (
  <>
    <CardUploader />
    <Box sx={{ position: 'absolute', mt: 120 }}>
      <Footer />
    </Box>
  </>
) */

const App:React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Esta función se pasará como prop al componente Hijo
  const driveIsLoading = (info: boolean) => {
    setIsLoading(info);
  };

  console.log(isLoading);

  return (
    <>
      <Box
        sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          height: '95vh', mt: -5
        }}
      >
        {isLoading ? <LoadingCard /> : <CardUploader isLoading={ driveIsLoading }/>}
        <Box sx={{ position: 'absolute', mt: 120 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default App;