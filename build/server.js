"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const PORT = 8080;
const app = (0, express_1.default)();
// const domain:string = "http://localhost:8080";
const domain = "https://imageuploader-challengue.1.us-1.fl0.io";
app.use((0, cors_1.default)());
app.use('/imagesProvider', express_1.default.static(__dirname + '/uploads'));
console.log(__dirname);
const storage = multer_1.default.diskStorage({
    destination: `${__dirname}/uploads`,
    filename: (_req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileName = file.fieldname + '-' + uniqueSuffix + path_1.default.extname(file.originalname);
        cb(null, fileName);
    },
});
const upload = (0, multer_1.default)({ storage });
// Ruta para obtener la imagen
app.get('/getimage', (_req, res) => {
    const filenames = fs_1.default.readdirSync(__dirname + '/uploads');
    res.json(`${domain}/imagesProvider/${filenames[filenames.length - 1]}`);
});
// Ruta para cargar una imagen
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }
    return res.status(200).json({ message: 'Imagen cargada exitosamente' });
});
app.listen(PORT, () => {
    console.log(`Example app listening on port: ${PORT}.`);
});
