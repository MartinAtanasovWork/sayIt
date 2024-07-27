const jwt = require("jsonwebtoken");
const secret = "token secret";
function createToken(user){
    const payload = {
        _id: user._id,
        email: user.email        
    }
    
    const token = jwt.sign(payload,secret,{expiresIn:"2d"});

    return token;
}

function verifyToken(token){
    const payload = jwt.verify(token,secret);
    return payload;
}

function createLogoutToken(user){
    const payload = {        
        email: user.email        
    }
    
    const token = jwt.sign(payload,secret,{expiresIn:"1s"});

    return token;
} 

module.exports = {
    createToken,verifyToken,createLogoutToken
}