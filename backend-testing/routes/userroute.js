const express=require("express")
const {getAllUser,getUserById}=require("../controllers/usercontroller")
const auth=require("../middlewares/auth")
const router=express.Router()
router.get('/',auth,getAllUser)
router.get('/:id',auth,getUserById)
module.exports=router