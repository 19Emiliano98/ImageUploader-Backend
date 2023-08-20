import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box 
      sx={{
        width: '100%'
      }}
    >
      <Typography 
        sx={{
          fontSize: '18px', color: '#4F4F4F', fontWeight: 600,
          m: '20px 0px 0px 19px'
        }}
      >
        Uploading...
      </Typography>
      <LinearProgress sx={{ display: 'flex', m: '35px 20px'}}/>
    </Box>
  );
}