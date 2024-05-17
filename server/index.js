const express = require("express");
const mongoose = require('mongoose');
const app = express();
const {router} = require('./Routes/authRoutes.js');
const login = require('./Routes/login.js');
const {saveCard} = require('./Routes/saveCard.js');
const dontev = require('dotenv');
dontev.config();
app.use(express.json());
app.use('/customerData',router);
app.use('/customerValidation',login);
app.use('/saveCustomerData',saveCard);


mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log('connected to database'))
        .catch((error)=>console.error(error));

const port = process.env.PORT;
app.listen(port,()=>console.log(`Listening at port ${port}...`))




