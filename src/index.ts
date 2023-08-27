import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";

const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRouter');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/user', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
