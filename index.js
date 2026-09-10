require("node:dns").setServers(['1.1.1.1','8.8.8.8'])
require('dotenv').config(); 
const express = require ("express");
const app = express()
const authRouter =require('./routers//authRouter')
const mongoDBconfig = require("./config/mongoDBconfig")



mongoDBconfig()
 app.use(express.json())
 app.use('/api/v1/auth', authRouter)

const PORT =process.env.PORT || 5000
app.listen(PORT ,()=>{
    console.log(`server is running on port:${PORT}`);
    
})










