"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect = require('./config/dbConnect');
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use('/', (req, res) => {
    const test = req.query;
    res.status(200).json(test);
});
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
