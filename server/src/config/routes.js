const { createController, updateController, deleteController, getArticles, getArticlesController, getArticlebyIDContoller } = require("../controllers/article");
const { loginController, registerController, logoutController } = require("../controllers/user");
const { isUser } = require("../middlewares/guards");

const router = require("express").Router();

router.post("user/login",loginController);
router.post("user/register",registerController);
router.get("user/logout",isUser,logoutController);

router.get("/articles",getArticlesController);
router.get("articles/:articleId",getArticlebyIDContoller);
router.post("/articles/create",isUser,createController);
router.post("/articles/update/:articleId",isUser,updateController);
router.post("/articles/delete/:articleId",isUser,deleteController);

module.exports = {
    router
} 