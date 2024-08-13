const { Article } = require("../model/Article");

async function getArticles() {
    let articles = await Article.find({});

    return articles;
}

async function getArticlebyID(articleId) {
    let article = await Article.find({ _id: articleId });

    return article;
}

async function getArticleByTopic(topic) {
    let articles = await Article.find({topics:[topic]})
    
    return articles;
}

async function getPopularArticles() {
    let articles = await getArticles();

    //Sort them by most likes
     
    return articles;
}

async function getSavedArticles(userId) {
    let articles = await getArticles();
    //Find articles if the user had liked them 

    return articles;
}

async function create(articleInfo) {
    let created = Date.now(); 
    articleInfo.created = created;

    let newArticle = new Article(articleInfo);

    let createdArticle = await newArticle.save();

    return createdArticle;
}

async function update(updatedInfo, articleId) {
   let updatedArticle = await Article.findOneAndUpdate({ _id: articleId }, updatedInfo);

   return updatedArticle;
}

async function deleteArticle(articleId) {
    await Article.findOneAndDelete({ _id: articleId });
}

module.exports = {
    create,
    update,
    deleteArticle,
    getArticlebyID,
    getArticles,
    getArticleByTopic,
    getPopularArticles,
    getSavedArticles
}