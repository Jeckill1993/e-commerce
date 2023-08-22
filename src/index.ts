import express, { Request, Response } from "express";
import dotenv from 'dotenv';

const dbConnect = require('./config/dbConnect');
const authRouter = require('./routes/authRouter');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

dbConnect();

app.use('/', (req: Request, res: Response) => {
    const test = req.query;
    res.status(200).json(test);
});

app.use('api/user', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
