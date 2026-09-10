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
})

module.exports=mongoose.model('user',userSchema)