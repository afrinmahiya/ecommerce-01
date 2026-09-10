const mongoose = require("mongoose")
function mongoDBconfig(){
    return mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('mongoDb connect hoise');
        
    }).catch(error=>{
                console.log('mongoDb connect error:'.error);

    })
    
    
}


module.exports = mongoDBconfig
