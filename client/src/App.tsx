import React, { useState, lazy, Suspense } from 'react';

import Footer from './components/footer/Footer.tsx';
import LoadingCard from './components/loadingCard/LoadingCard.tsx';
import CardConfirmation from './components/cardConfirmation/CardConfirmation.tsx';

import { Box } from '@mui/material';

const CardUploader = lazy(() => import('./components/cardUploader/CardUploader'));

interface dataSending {
  enviarInformacion: (info: boolean) => void; // Definimos una función callback como prop
}

const App:React.FC<dataSending> = () => {
  const [latestImage, setLatestImage] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  
  const manejarInformacionDelHijo = (info: boolean) => {
    setCheck(info)
  };
  
  if( check === true ){
    // Hacer una solicitud a tu API para obtener la URL de la última imagen subida
    fetch('http://localhost:8080/upload')
      .then((response) => response.json())
      .then((data) => {
        // data debería contener la URL de la última imagen subida
        setLatestImage(data);
      })
      .catch((error) => {
        console.error('Error fetching latest image:', error);
      });
  }
  
  return (
    <>
      <Box
        sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          height: '95vh', mt: -5
        }}
      >
        <Suspense fallback={ <LoadingCard /> }>
          {check ? <CardConfirmation dataImage={latestImage}/> : <CardUploader enviarInformacion={manejarInformacionDelHijo}/>}
        </Suspense>
        <Box sx={{ position: 'absolute', mt: 120 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default App;