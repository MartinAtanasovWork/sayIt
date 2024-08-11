const jwt = require("jsonwebtoken");
const secret = "token secret";

let INVALID_TOKENS = [];

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = jwt.sign(payload, secret, { expiresIn: "2d" });

    return token;
}

function verifyToken(token) {

    if(INVALID_TOKENS.includes(token)){
        return null;
    }

    try {
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (error) {
        return null;        
    }

}

function invalidateToken(token){
    INVALID_TOKENS.push(token);
}

module.exports = {
    createToken, verifyToken, invalidateToken 
}