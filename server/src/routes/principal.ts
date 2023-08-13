//import express from 'express';
import { Router } from 'express';
import multer from 'multer';

const principal = Router();

const upload = multer({ dest: './public/uploadedImages' })

principal.post('/', upload.single('avatar'), function ( req, res ) {
  console.log('Imagen enviada')
  console.log(req.file, req.body)
  
  res.send('hola ruta principal')
});

principal.get('/', function(_req, res) {
  res.send('hola ruta')
});

export { principal };