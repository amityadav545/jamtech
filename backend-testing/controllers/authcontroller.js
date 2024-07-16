const User=require("../models/User")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
exports.registration=async(req,res)=>{
    try{

        const { userName, userEmail, password } = req.body;
        
        var user=await User.findOne({userEmail})
       
        if(user){
            res.status(401).json({
                msg:"Email is already Exit"
            })
        }
        user= new User({
            userName,
            userEmail,
            password
        })
        console.log(user);
        const salt= await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.json({
            userName: user.userName,
            userEmail: user.userEmail
        });


    }catch(error){
      res.status(401).json({
        msg:error
      })
    }

}

exports.logIn=async(req,res)=>{

const {userEmail, password } = req.body;

try{


const user=await User.findOne({userEmail})

 if(!user){
    res.status(401).json({
        msg:"user not found"
    })
 }
 
 const isMatch= await bcrypt.compare(password,user.password)
 
 if(!isMatch){
  res.status(401).json({
    msg:"invalid password"
  })
 }
 const payload = {
    user: {
        id: user.id
    }

};


jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: 3600 }, (err, token) => {
    if (err) throw err;
    res.json({ token,userName:user.userName,email:user.userEmail });
});
}catch(error){
    res.status(401).json({
        msg:error
      }) 
}
}