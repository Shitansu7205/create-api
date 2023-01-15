require("dotenv").config()
const json_data = require("./data.json")
// const product_routes = require("./routes")
// const student_schema = require("./schema_models")
// const Product = require("./schema_models.js")
const Product = require("./schema_models")
const connectDB = require("./connecd_db")

const start = async()=>{
    try {
        console.log("connection sucessfullh......")
        await connectDB(process.env.MONGODB_URL)
      await  Product.create(json_data)
    } catch (error) {
        console.log(error);
    }

}


start()