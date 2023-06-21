import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DBConnection = async() =>{
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const MONGODB_URI = `mongodb+srv://${PASSWORD}:${PASSWORD}@cluster0.kqt5mqp.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log('connected to mongoose');
    }catch(error){
        console.log('error while connecting with the database',error.message);
    }
}
export default DBConnection;