import React/* , { useState } */ from 'react';

import { ImageUploadForm } from './ImageUploadForm.tsx';

import { Card, CardContent, Typography } from '@mui/material';

interface HijoProps {
  isLoading: (info: boolean) => void; // Definimos una función callback como prop
}

const CardUploader: React.FC<HijoProps> = ({ isLoading }) => {
  //const [isLoading, setIsLoading] = useState<boolean>(false);

  // Esta función se pasará como prop al componente Hijo
  const driveIsLoading = (info: boolean) => {
    isLoading(info);
  };

  return (
    <Card 
      sx={{
        borderRadius: '12px', boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)'
      }}
    >
      <CardContent
        sx={{
          textAlign: 'center',
          width: 580,
        }}
      >
        <Typography variant='h1' sx={{ fontSize: '40px', fontWeight: 600, color: '#4F4F4F', mt: 3 }}>
          Upload your image
        </Typography>
        
        <Typography variant='body1' sx={{ fontSize: '18px', color: '#828282', mt: 2, mb: 4 }}>
          File should be Jpeg, Png,...
        </Typography>
        
        <ImageUploadForm isLoading={driveIsLoading}/>
        
        <Typography variant='body2' sx={{ fontSize: '18px', color: '#828282', mt: 3, mb: 8 }}>Or</Typography>
      </CardContent>
    </Card>
  )
}

export default CardUploader;