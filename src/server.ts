import express, { Express, Request, Response } from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import 'dotenv/config';
const app:Express = express();

// const domain:string = `http://localhost:${process.env.PORT || 8080}`;
const domain:string = "https://imageuploaderchallengue.adaptable.app";

app.use(cors());
app.use('/imagesProvider', express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
  destination: `${__dirname}/uploads`,
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileName = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
    cb(null, fileName);
  },
});
const upload = multer({ storage });

// Ruta para obtener la imagen
app.get('/getimage', (_req: Request, res: Response) => {
  const filenames = fs.readdirSync(__dirname + '/uploads');
  res.json(`${domain}/imagesProvider/${filenames[filenames.length - 1]}`);
})

// Ruta para cargar una imagen
app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
  }
  return res.status(200).json({ message: 'Imagen cargada exitosamente' });
});

app.listen( process.env.PORT || 8080, () => {
  console.log( `Example app listening on port: ${process.env.PORT || 8080}.` );
});