const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const verify = require('../middleware/verify.js');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

router.use(cors({
    origin : ["https://shopify-ecommerce-1.onrender.com","http://localhost:3000"]
}));
router.use(express.json());

const CustomerData = mongoose.model('cardData',new mongoose.Schema({
    key:String,
    img:String,
    name:String,
    old_price:String,
    new_price:String,
    category:String,
}));


router.post('/',verify,(req,res)=>{
    console.log(req.header('x-token'));
    const key = req.body.key;
    const img = req.body.img;
    const name = req.body.name;
    const old_price = req.body.old_price;
    const new_price = req.body.new_price;
    const category = req.body.category;

    async function cardData(key,img,name,old_price,new_price,category){
        try{
            const card = await CustomerData({
                key,
                img,
                name,
                old_price,
                new_price,
                category
            });
            const count = await CustomerData.countDocuments();
            console.log(count);
            const result = await card.save();
            console.log(result);
            res.send({message:'Added to the cart',bool:true,count});
        }
        catch(error){
            console.log('Data not saved');
            res.status(400).send({message:'Data not saved',bool:false,count:null});
        }
    }

    cardData(key,img,name,old_price,new_price,category);
})

module.exports = {
    saveCard:router,
    CustomerData:CustomerData
};