import express, { Express, Request, Response } from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';

const PORT:number = 8080;
const app: Express = express();

//app.use(express.static(path.join(__dirname, '../uploads')))
app.use(cors());

// Configuración de Multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Ruta para cargar una imagen
app.post('/upload', upload.single('image'), (req: Request, res: Response) => {
  console.log(req.file);
  

  if (!req.file) {
    return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
  }

  return res.status(200).json({ message: 'Imagen cargada exitosamente' });
});

app.listen( PORT, () => {
  console.log( `Example app listening on port: ${PORT}. Login in: http://localhost:${PORT}/upload` );
});