const mongoose = require("mongoose")

// url = "mongodb+srv://shitansu:wOK4eaW19maMabLH@shitansuapi.zed1fig.mongodb.net/shitansuapi?retryWrites=true&w=majority"



const connectDB = async(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser :true,
        useUnifiedTopology:true
    })
}

module.exports=connectDB