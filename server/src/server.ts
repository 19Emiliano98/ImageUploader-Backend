import express from 'express';
import { principal, redirect } from './routes/principal.ts';

const app = express();
const PORT:number = 8080;

app.use( '/principal', principal );
app.use( '/*', redirect );

app.listen( PORT, () => {
  console.log( `Example app listening on port: ${PORT}. Login in: https://localhost:${PORT}/principal` );
});