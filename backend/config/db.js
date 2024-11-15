import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dhananjaychoudhary017:dhananjaychoudhary017@foodi.j04sp.mongodb.net/?retryWrites=true&w=majority&appName=Foodi').then(()=>console.log("DB Connected"))
}

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.