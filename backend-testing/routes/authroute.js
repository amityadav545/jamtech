const express=require("express")
const {registration,logIn}=require("../controllers/authcontroller")
const router=express.Router()
router.post('/registration',registration)
router.post('/login',logIn)
module.exports=router