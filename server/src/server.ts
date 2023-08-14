import express from 'express';

const app = express();
app.use(express.json());
const PORT:number = 8080;

app.get('/ping', (_req, res) =>{
  console.log('someone pinged here!!!');
  res.send('pong');
})

app.listen( PORT, () => {
  console.log( `Example app listening on port: ${PORT}. Login in: https://localhost:${PORT}/principal` );
});