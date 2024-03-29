import mongoose from 'mongoose'
let isConnected = false;
// import { config } from 'dotenv'
import dotenv from 'dotenv';

dotenv.config();

// const {parsed} = dotenv;

// export default {
//     env:{
//         mongodb: parsed.MONGO_URL
//     }
// }

export const connectDB = async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected)return console.log('Alredy Connected!');

    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"gsmedition"
        });
        isConnected = true
        console.log("Connected to mongodb!!!!, gsmedition");
    }catch(error){
        console.log("Eroor in connection to db!!!",error)
    }
};

// mongodb+srv://rahulrawal:RahulRawal@cluster0.drbijce.mongodb.net/foodfactory?retryWrites=true&w=majority