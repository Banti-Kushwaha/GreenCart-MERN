import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=> console.log('Database connected successfully'));
        await mongoose.connect(`${process.env.MongoDB_URI}`);
    } catch (error){
        console.error('Error connecting to database:', error.message);
    }
}

export default connectDB;