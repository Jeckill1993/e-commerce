"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRouter');
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
app.use('/api/user', authRouter);
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
