
const mongoose=require('mongoose');
const mongoURI="mongodb+srv://shashwatssp:niverakesh@cluster0.mq3ftpo.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo successfully");
    })
}
module.exports=connectToMongo;