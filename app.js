const express = require("express");
const app = express();
const port= 5000;
const web = require("./routes/web")
const connectDB = require("./database/connectDB")
const bodyparser = require('body-parser')

//ejs set html css
app.set('view engine','ejs')

// imageUpload
const fileUpload = require('express-fileupload')

// image FileUpload
app.use(fileUpload({useTempFiles:true}))

//req.body undifine
app.use(express.urlencoded({extended:false}));
app.use(bodyparser.json())
//connectdb
connectDB()

//css image
app.use(express.static('public'))

//route load
app.use("/",web)


//creat server 
app.listen(port , ()=>{
    console.log(`server start localhost:${port}`)
})