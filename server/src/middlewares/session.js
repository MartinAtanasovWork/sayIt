const {verifyToken} = require("../services/token");

function session(){
    return function (req,res,next){
        let token = req.cookies.token;

        if(token){
            try {
                let payload = verifyToken(token);
                req.user = payload;                
                res.locals.hasUser = true;
            } catch (error) {
                res.clearCookie("token");
            }
        }

        next();
    }
}

module.exports ={
    session
}