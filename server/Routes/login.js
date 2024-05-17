const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const {Customer} = require('./authRoutes.js');

const router = express.Router();
router.use(express.json());
router.use(cors({
    origin : ["https://shopify-ecommerce-1.onrender.com","http://localhost:3000"]
}));

router.post('/',async(req,res)=>{
    const customer = await Customer.find({email:req.body.email});
    const password = req.body.password;
    const salt =await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const pass = await Customer.find({password:hash});
    if(customer){
        if(!pass){
            return res.status(404).send("Invalid emial or password");
        }
    }
    else{
        return res.status(404).send("Invalid user");
    }
    const token = jwt.sign({_id:customer._id},process.env.jwtPrivateKey);
    console.log(token);
    res.send({bool:true,token});
});

module.exports = router;