const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    userName:{
     type:String,
     require:true
    },
    userEmail:{
        type:String,
        require:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('User',UserSchema)