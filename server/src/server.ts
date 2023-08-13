import express from 'express';

import { principal } from './routes/principal.ts';

const app = express();
const PORT:number = 8080;

app.use( '/principal', principal );

app.listen( PORT, () => {
  console.log( `Example app listening on port: ${PORT}. Login in: https://localhost:${PORT}/principal` );
});