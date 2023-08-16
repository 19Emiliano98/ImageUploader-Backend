"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
const upload = (0, multer_1.default)({ dest: './uploads' });
const PORT = 8080;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!!');
    res.send('pong');
});
app.post('/profile', upload.single('avatar'), function (_req, _res, _next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log('archivo subido');
});
app.listen(PORT, () => {
    console.log(`Example app listening on port: ${PORT}. Login in: https://localhost:${PORT}/principal`);
});
