import mongoose from 'mongoose'
let isConnected = false;

export const connectDB = async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected)return console.log('Alredy Connected!');

    try {
        await mongoose.connect('mongodb+srv://rahulrawal:RahulRawal@cluster0.drbijce.mongodb.net/gsmedition?retryWrites=true&w=majority',{
            dbName:"gsmedition"
        });
        isConnected = true
        console.log("Connected to mongodb!!!!, gsmedition");
    }catch(error){
        console.log("Eroor in connection to db!!!",error)
    }
};

// mongodb+srv://rahulrawal:RahulRawal@cluster0.drbijce.mongodb.net/foodfactory?retryWrites=true&w=majority