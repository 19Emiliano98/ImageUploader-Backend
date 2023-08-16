"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const PORT = 8080;
const app = (0, express_1.default)();
//app.use(express.static(path.join(__dirname, '../uploads')))
app.use((0, cors_1.default)());
// Configuración de Multer para manejar la carga de archivos
const storage = multer_1.default.diskStorage({
    destination: 'uploads/',
    filename: (_req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({ storage });
// Ruta para cargar una imagen
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    if (!req.file) {
        return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }
    return res.status(200).json({ message: 'Imagen cargada exitosamente' });
});
app.listen(PORT, () => {
    console.log(`Example app listening on port: ${PORT}. Login in: http://localhost:${PORT}/upload`);
});
