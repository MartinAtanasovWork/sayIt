const { createController, updateController, deleteController, getArticlesController, getArticlebyIDContoller, getArticleByTopicController, getLatestArticlesController } = require("../controllers/article");
const { getArticleCommentsController, createCommentController, deleteCommentController } = require("../controllers/comments");
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
router.get("/articles/latest",getLatestArticlesController);

router.post("/articles/create",isUser,createController);
router.put("/articles/update/:articleId",isUser,updateController);
router.delete("/articles/delete/:articleId",isUser,deleteController);

router.get("/articles/comments/:articleId",getArticleCommentsController);
router.post("/articles/comments/create",isUser,createCommentController);
router.post("/articles/comments/delete",deleteCommentController);

module.exports = {
    router
} 