const { create, update, deleteArticle, getArticlebyID, getArticles, getArticleByTopic, getLatestArticles} = require("../services/article");

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

async function getArticleByTopicController(req,res) {
    let topic = req.params.topic;
    
    let articles = await getArticleByTopic(topic);
    
    res.json(articles);
    res.end();    
}

async function getLatestArticlesController(req,res) {    
    let articles = await getLatestArticles();
                
    res.json(articles);
    res.end();
}

async function createController(req, res) {
    let data = req.body;    
    let id = req.user._id;

    let article = await create(data,id);

    res.status(201);
    res.json(article);
    res.end();
}

async function updateController(req, res) {
    let articleId = req.params.articleId;
    let userId = req.user._id;

    let article = await getArticlebyID(articleId);  
    
    if(userId != article[0].author){
        res.status(403);
        res.json({ error: "Unauthorized request" });
        res.end();
    }

    let updatedArticle = await update(req.body, articleId);
           
    res.json(updatedArticle);  
    res.end();
}

async function deleteController(req, res) {    
    let articleId = req.params.articleId;
    let userId = req.user._id;   
    
    let article = await getArticlebyID(articleId);

    if(userId != article[0].author){
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
    getLatestArticlesController,  
    createController,
    updateController,
    deleteController,
    getArticleByTopicController
}