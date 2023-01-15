const Product  =require("./schema_models")
const getAllItems = async(req,res)=>{
    const mydata =  await Product.find(req.query)  //req.query is used to get the user input acccording to your requirement
    console.log(req.query);
    res.status(200).json({mydata})
}

const getAllItemsTesting = async(req,res)=>{
    res.status(200).json({name:" i am getallitemtesting"})
}



module.exports = {getAllItems,getAllItemsTesting}