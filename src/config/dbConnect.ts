import mongoose from "mongoose";

const dbConnect = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log('database was connected');
    } catch (error) {
        console.log('database connection error');
    }
}

module.exports = dbConnect;
