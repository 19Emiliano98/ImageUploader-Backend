//import React from 'react';
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
        <CheckCircleIcon sx={{ color: 'rgba(33, 150, 83, 1)', fontSize: '55px' }}/>
        <Typography variant='h1' sx={{ fontSize: '40px', fontWeight: 600, color: '#4F4F4F', mt: 3 }}>
          Uploaded Successfully!
        </Typography>
        
        <CardMedia
          component="img"
          height="194"
          image= {dataImage}
          alt="Imagen Subida"
        />
        <Box>
          <TextField 
            id='clipBoardValue'
            value={dataImage}
            variant="outlined"
          />
          <Button variant="contained" onClick={() => copyToClipboard()}>Copy to Clipboard</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardConfirmation;