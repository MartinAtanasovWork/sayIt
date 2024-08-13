const { createController, updateController, deleteController, getArticlesController, getArticlebyIDContoller, getArticleByTopicController, getPopularArticlesController, getSavedArticlesContoller } = require("../controllers/article");
const { loginController, registerController, logoutController, getCurrentUserContoller, changeCurrentUserController } = require("../controllers/user");
const { isUser } = require("../middlewares/guards");

const router = require("express").Router();

router.post("/user/login",loginController);
router.post("/user/register",registerController);
router.get("/user/logout",isUser,logoutController);
router.get("/user/me",isUser,getCurrentUserContoller);
router.put("/user/me/update",isUser,changeCurrentUserController)

router.get("/articles",getArticlesController);
router.get("/articles/details/:articleId",getArticlebyIDContoller);
router.get("/articles/topics/:topic",getArticleByTopicController)
router.get("/articles/popular",getPopularArticlesController);
router.get("/articles/saved",getSavedArticlesContoller);

router.post("/articles/create",isUser,createController);
router.post("/articles/update/:articleId",isUser,updateController);
router.post("/articles/delete/:articleId",isUser,deleteController);

module.exports = {
    router
} 