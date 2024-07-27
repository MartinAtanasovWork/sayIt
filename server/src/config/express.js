const {urlencoded, json} = require("express");
const cookieParser = require("cookie-parser");
const { session } = require("../middlewares/session");
const { cors } = require("../middlewares/cors");

const secret = "special secret"

function expressConfig(app){
    app.use(cors());
    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use(cookieParser(secret));
    app.use(session());    
}

module.exports = {
    expressConfig
}