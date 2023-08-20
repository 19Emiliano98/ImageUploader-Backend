import LinearIndeterminate from './LinearIndeterminate.tsx';

import { Card, CardContent } from '@mui/material';

const LoadingCard = () => {
  return (
    <>
      <Card 
        sx={{
          width: '400px', height: '143px',
          borderRadius: '12px', boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)'
        }}
      >
        <CardContent>
          <LinearIndeterminate />
        </CardContent>
      </Card>
    </>
  )
}

export default LoadingCard