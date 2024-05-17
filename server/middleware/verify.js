const jwt = require('jsonwebtoken');
const dontev = require('dotenv');
dontev.config();
// const cors = require('cors');
// const ex

module.exports = function (req,res,next){
    try{
        const clientToken = req.header('x-token');
        if(!clientToken){
            return res.status(404).send({bool:false,message:'token not found'});
        }
        
        const verified = jwt.verify(clientToken,process.env.jwtPrivateKey);
        if(verified){
            next();
        }
        else{
            res.send({bool:false,message:'access denied'});
            console.log('access denied');
        }
    }
    catch(err){
        console.error(err);
    }
}