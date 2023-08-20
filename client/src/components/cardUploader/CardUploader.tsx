import { ImageUploadForm } from './ImageUploadForm.tsx';

import { Card, CardContent, Typography } from '@mui/material';

const CardUploader: React.FC = () => {
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
        
        <ImageUploadForm />
        
        <Typography variant='body2' sx={{ fontSize: '18px', color: '#828282', mt: 3, mb: 8 }}>Or</Typography>
      </CardContent>
    </Card>
  )
}

export default CardUploader;