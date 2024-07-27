const { loginController, registerController, logoutController } = require("../controllers/user");

const router = require("express").Router();

router.post("/login",loginController);
router.post("/register",registerController);
router.post("/logout",logoutController)

module.exports = {
    router
} 