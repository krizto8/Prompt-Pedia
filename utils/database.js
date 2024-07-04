import { MONGO_CLIENT_EVENTS } from "mongodb";
import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', false);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",

        })
        isConnected = true;
        console.log('MongoDB connected');

    } catch (error) {
        console.log(error);

    }
} 