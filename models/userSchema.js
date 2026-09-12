const mongoose = require ("mongoose");
const {Schema} = mongoose

const userSchema = new Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    terms:{
        type:Boolean,
        require:true
    },
    

    role:{
        type:String,
        enum:['uder','admin'],
        default:'user'
    },

    status:{
        type:String,
        enum:['active','deactive'],
        default:'active' 
    }
})


module.exports=mongoose.model('user',userSchema)