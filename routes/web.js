const express = require('express')
const FrontController = require("../controllers/FrontController")
const Admincontroller = require('../controllers/admin/Admincontroller')
const route = express.Router()


// route localhost:5000(/)
route.get("/",FrontController.home)
route.get("/about",FrontController.about)
route.get("/grs",FrontController.grs)
route.get("/features",FrontController.features);
route.get("/benefits",FrontController.benefits);
route.get("/help",FrontController.help);
route.get("/register",FrontController.register)



//insert user
route.post("/InsertAdm",Admincontroller.AdminRegister);




//adminpart
route.get("/admin/dashboard",Admincontroller.dashboard)






module.exports=route
