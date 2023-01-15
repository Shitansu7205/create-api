
require("dotenv").config()
const express = require("express")
const connectDB = require("./connecd_db")
const port = 3000

const app = express()

const product_routes = require("./routes")

app.get("/", (req, res) => {
    res.send("hello this is a home page of the site")

});



app.use("/api/test", product_routes)

connectDB(process.env.MONGODB_URL)


app.listen(port, () => {
    console.log(`server started at the port of ${port}`)
})