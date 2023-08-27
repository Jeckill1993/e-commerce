"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = () => {
    try {
        const connect = mongoose_1.default.connect(process.env.MONGODB_CONNECTION_URL);
        if (!connect)
            throw new Error('MONGODB_CONNECTION_URL is not defined in the environment variables.');
        console.log('database was connected');
    }
    catch (error) {
        console.log('database connection error');
    }
};
module.exports = dbConnect;
