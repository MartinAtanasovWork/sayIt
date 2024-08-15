const { verifyToken } = require("../services/token");

async function isUser(req, res, next) {
    let token = req.headers["auth-token"];
               
    if (!token) {
        res.status(401);
        res.json({ error: "Unauthenticated request" });
        res.end();
        return;
    }
   
    let result = verifyToken(token);

    if (!result) {     
        res.status(403);
        res.json({ error: "Unauthorized request" });
        res.end();
        return;
    }   
    
    next();
}

module.exports = {
    isUser
}