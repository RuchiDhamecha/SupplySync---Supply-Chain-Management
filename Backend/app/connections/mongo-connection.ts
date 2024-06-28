import mongoose from "mongoose";

export const connectToMongoDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to MongoDB Successfully..`)
  }catch(e){
    throw 'Cannot connect to MongoDB!';
  }
}