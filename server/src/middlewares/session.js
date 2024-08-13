const { verifyToken } = require("../services/token");

function session() {
    return function (req, res, next) {
        let token = req.headers["auth-token"];     
        
        if (token) {
            let payload = verifyToken(token);
            req.user = payload || undefined;
        }

        next();
    }
}

module.exports = {
    session
}