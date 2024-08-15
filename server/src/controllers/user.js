const { createToken, createLogoutToken } = require("../services/token");
const { login, register, logout, getUserById, updateUser } = require("../services/user");

async function loginController(req, res) {
    let { email, password } = req.body;

    let result = await login(email, password);

    res.json(result);
    res.end();
}

async function registerController(req, res) {
    let { email, password } = req.body;

    let result = await register(email, password);

    res.json(result);
    res.end();
}

async function getCurrentUserContoller(req, res) {  
    if(!req.user){
        res.json({});
        res.end();
    }
    
    let id = req.user._id;

    let user = await getUserById(id);

    res.json(user);
    res.end();
}

async function changeCurrentUserController(req, res) {
    let id = req.user._id;
    let body = req.body;

    let user = await updateUser(id, body);

    res.json(user);
    res.end();
}

async function logoutController(req, res) {
    res.status(200);
    res.json({success:"success"});
    res.end();
}

module.exports = {
    loginController,
    registerController,
    logoutController,
    getCurrentUserContoller,
    changeCurrentUserController
}