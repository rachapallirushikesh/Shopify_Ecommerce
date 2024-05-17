const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const dontev = require('dotenv');
dontev.config();
const cors = require('cors');

const router = express.Router();
router.use(express.json());
router.use(cors({
    origin:["https://shopify-ecommerce-1.onrender.com","http://localhost:3000"]
}));

const Customer = mongoose.model('customers',new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    player:'String',
    password:{
        type:String,
        required:true
    }
}));


router.post('/',async(req,res)=>{
    const email = req.body.email;
    const contactNumber = req.body.number;
    const question = req.body.player;
    const password = req.body.password;
    console.log(req.body);
    const validation = await Customer.findOne({email:req.body.email});
    if(validation) return res.status(400).send('User already existed'); 

    const salt =await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    async function createCustomer(email,contactNumber,question,hash){
        console.log('server');
        const customer = await Customer({
            email,
            contactNumber,
            question,
            password:hash
        });

        const result = await customer.save();
        console.log(result);
        res.send(true);
    }

    createCustomer(email,contactNumber,question,hash);
});

module.exports ={
    Customer:Customer,
    router:router
};