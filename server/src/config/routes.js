const { createController, updateController, deleteController } = require("../controllers/article");
const { loginController, registerController, logoutController } = require("../controllers/user");
const { isUser } = require("../middlewares/guards");

const router = require("express").Router();

router.post("/login",loginController);
router.post("/register",registerController);
router.post("/logout",isUser,logoutController);
router.post("/create",isUser,createController);
router.post("/update/:articleId",isUser,updateController);
router.post("/delete/:articleId",isUser,deleteController);

module.exports = {
    router
} 