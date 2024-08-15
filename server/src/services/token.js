const jwt = require("jsonwebtoken");
const secret = "token secret";

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = jwt.sign(payload, secret, { expiresIn: "2d" });

    return token;
}

function verifyToken(token) {

    try {
        const payload = jwt.verify(token, secret);
        return payload;
    } catch (error) {
        return null;        
    }

}

module.exports = {
    createToken, verifyToken  
}