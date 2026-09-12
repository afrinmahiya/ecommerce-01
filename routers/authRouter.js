const express = require('express');
const {registrationController}= require('../controllers/authController')
const router = express.Router();

 

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

router.post('/registration',registrationController)

module.exports=router