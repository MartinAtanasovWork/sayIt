const { create, update, deleteArticle, getArticlebyID, getArticles } = require("../services/article");

async function getArticlesController(req,res) {
    let articles = await getArticles();
    
    res.json(articles);
    res.end();
}

async function getArticlebyIDContoller(req,res) {
    let articleId = req.params.articleId;
    
    let article = await getArticlebyID(articleId);

    res.json(article);
    res.end();
}

async function createController(req, res) {
    let data = req.body;    
    
    let article = await create(data);

    res.status(201);
    res.json(article);
    res.end();
}

async function updateController(req, res) {
    let articleId = req.params.articleId;
    let userId = req.user._id;

    let article = await getArticlebyID(articleId);

    if(userId != article.author){
        res.status(403);
        res.json({ error: "Unauthorized request" });
        res.end();
    }

    await update(req.body, articleId);

    res.status(204)  
    res.end();
}

async function deleteController(req, res) {
    let articleId = req.params.articleId;
    let userId = req.user._id;

    let article = await getArticlebyID(articleId);

    if(userId != article.author){
        res.status(403);
        res.json({ error: "Unauthorized request" });
        res.end();
    }

    await deleteArticle(articleId);

    res.status(204)  
    res.end();
}

module.exports = {
    getArticlesController,
    getArticlebyIDContoller,
    createController,
    updateController,
    deleteController
}