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

exports.updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).select("-password");
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(401).json({
                msg: "User not found"
            });
        }
    } catch (error) {
        res.status(401).json({
            msg: error
        });
    }
};

exports.deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id).select("-password");
        if (deletedUser) {
            res.status(200).json({
                msg: "User deleted successfully"
            });
        } else {
            res.status(401).json({
                msg: "User not found"
            });
        }
    } catch (error) {
        res.status(401).json({
            msg: error
        });
    }
};
   
}