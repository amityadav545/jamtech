const User=require("../models/User")
exports.getAllUser=async(req,res)=>{
    
    try{
        const users=await User.find().select("-password")
        if(users){
          res.status(200).json(users)
        }
        else{
          res.status(401).json({
              msg:"users not found"
          })
        }
    }catch(error){
        res.status(401).json({
            msg:error
        })
    }
      
}

exports.getUserById=async(req,res)=>{
try{
    const users=await User.findById(req.params.id).select("-password")
    if(users){
      res.status(200).json(users)
    }
    else{
      res.status(401).json({
          msg:"users not found"
      })
    }
}catch(error){
    res.status(401).json({
        msg:error
    })
}
   
}