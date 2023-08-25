import React from 'react'

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const API = 'http://localhost:8080/upload';

fetch( API, { method: 'GET' })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success: ' + result);
    })
    .catch((error) => {
      console.error('Error:' + error);
    });

interface propChild {
  dataImage: string; // Define el tipo de miVariable
}

const CardConfirmation:React.FC<propChild> = ({ dataImage }) => {
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
          alt="test"
        />
      </CardContent>
    </Card>
  )
}

export default CardConfirmation;