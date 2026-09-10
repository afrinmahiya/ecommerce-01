const User = require('../models/userSchema')
let registrationController = async (req,res)=>{
let {fullName,email,password,comfrimPassword, terms }= req.body


let existingUser = await User.findOne({email:email})


if(!fullName|| !email || !password || !comfrimPassword || !terms){
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



if(password !== comfrimPassword ){
  return  res.status(400).json({
        success:false,
        massage:" Password not match "
    })
}



res.send("registration")

}


module.exports={registrationController}