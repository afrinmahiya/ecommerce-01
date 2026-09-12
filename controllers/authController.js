const User = require('../models/userSchema')
const bcrypt = require("bcrypt")


let registrationController = async (req,res)=>{
let {fullName,email,password,confrimPassword, terms }= req.body
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


let existingUser = await User.findOne({email:email})
if(existingUser){
     return res.status(400).json({
        success:false,
        massage:"email already exist"
    })
}

if(!fullName|| !email || !password || !confrimPassword || !terms){
   return res.status(400).json({
        success:false,
        massage:"are you stupid ! fill the all fields "
    })
}

if(!emailRegex.test(email)){
     return res.status(400).json({
        success:false,
        massage:"uhu, enter a valid email "
    })
}

// if(!passwordRegex.test(email)){
//     return  res.status(400).json({
//         success:false,
//         massage:"enter a valid password "
//     })
// }





if(password !== confrimPassword ){
  return  res.status(400).json({
        success:false,
        massage:" Password not match "
    })
}

const hash = bcrypt.hashSync(password, 10);


const user = new User({
    fullName: fullName,
    email: email,
    password:hash, 
     terms: terms
})

 user.save()

res.status(201).json({
    success:true,
    message:"Registration Done"
})



res.send("registration")

}



module.exports={registrationController}