import mongoose from "mongoose";

declare var process : {
    env: {
        MONGODB_CONNECTION_URL: string
    }
}

const dbConnect = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        if(!connect) throw new Error('MONGODB_CONNECTION_URL is not defined in the environment variables.');

        console.log('database was connected');
    } catch (error) {
        console.log('database connection error');
    }
}

module.exports = dbConnect;
