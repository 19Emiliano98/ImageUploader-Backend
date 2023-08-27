import React from 'react';

import { Box, Card, CardContent, CardMedia, Typography, TextField, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
interface propChild {
  dataImage: string; // Define el tipo de miVariable
}

const CardConfirmation:React.FC<propChild> = ({ dataImage }) => {
  const copyToClipboard = () => {
    const source = document.getElementById('clipBoardValue') as HTMLInputElement | null;
    
    if (source != null) {
      navigator.clipboard.writeText(source.value)
    }
  }
console.log(dataImage);
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
        <CheckCircleIcon sx={{ color: 'rgba(33, 150, 83, 1)', fontSize: '55px', mt: 2 }}/>
        <Typography variant='h1' sx={{ fontSize: '40px', fontWeight: 600, color: '#4F4F4F', mt: 2 }}>
          Uploaded Successfully!
        </Typography>
        
        <CardMedia
          sx={{
            borderRadius: '20px',
            mt: 4
          }}
          component="img"
          height="350"
          image= {dataImage}
          alt="Imagen Subida"
        />
        <Box
        sx={{
          mt: 3
        }}
        >
          <TextField
            sx={{
              width: 510
            }}
            id='clipBoardValue'
            value={dataImage}
            variant="outlined"
          />
          <Button 
            sx={{
              position: 'absolute',
              height: 47,
              mt: 0.55, ml: -14.1
            }}
            variant="contained"
            onClick={() => copyToClipboard()}
          >
            Copy Link
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardConfirmation;