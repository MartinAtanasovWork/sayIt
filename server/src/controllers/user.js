const { createToken, createLogoutToken } = require("../services/token");
const { login, register, logout } = require("../services/user");

async function loginController(req, res) {
    let { email, password } = req.body;

    let result = await login(email, password);
    
    if(result.error){
       // let token = createToken(result);
        res.set("Auth-Token","aaa");
    }

    res.json(result);
    res.end();
}

async function registerController(req, res) {
    let { email, password } = req.body;
    
    let result = await register(email, password);
    
    if(!result.error){
        let token = createToken(result);
        res.set("Auth-Token",token);
    }

    res.json(result);
    res.end();
}

async function logoutController(req,res){
    let token = req.headers["auth-token"];;

    logout(token);

    res.status(200);
    res.end();
}

module.exports = {
    loginController,
    registerController,
    logoutController
}