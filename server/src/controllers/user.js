const { createToken, createLogoutToken } = require("../services/token");
const { login, register } = require("../services/user");

async function loginController(req, res) {
    let { email, password } = req.body;

    let result = await login(email, password);
    
    if(!result.error){
        let token = createToken(result);
        res.set("Auth-Token",token);
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
    let newToken = createLogoutToken(req.body.user);
    
    res.set("Auth-Token",newToken);
    res.end();
}

module.exports = {
    loginController,
    registerController,
    logoutController
}