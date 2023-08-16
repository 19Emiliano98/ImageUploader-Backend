import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';

const PORT:number = 8080;
const app = express();
//app.use(express.static(path.join(__dirname, '../uploads')))
app.use(cors());

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/'); // Ruta donde se almacenarán los archivos
  },
  filename: (_req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

const upload = multer({ storage });
//const upload = multer({ dest: './uploads' });

app.post('/upload', upload.single('upload'), (req, res) => {
  console.log(req.file);
  
  if (!req.file) {
    return res.status(400).json({ error: 'No se proporcionó ningún archivo.' });
  }

  const imagePath = req.file.path;

  return res.json({ message: 'Imagen subida con éxito.', imagePath });
});

app.get('/ping', (_req, res) =>{
  console.log('someone pinged here!!!');
  res.send('pong');
})

app.listen( PORT, () => {
  console.log( `Example app listening on port: ${PORT}. Login in: http://localhost:${PORT}/upload` );
});