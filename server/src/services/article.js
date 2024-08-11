const { Article } = require("../model/Article");

async function getArticles() {
    let articles = await Article.find({});

    return articles;
}

async function getArticlebyID(articleId) {
    let article = await Article.find({ _id: articleId });

    return article;
}

async function create(articleInfo) {
    let created = Date.now(); 
    articleInfo.created = created;

    let newArticle = new Article(articleInfo);

    let createdArticle = await newArticle.save();

    return createdArticle;
}

async function update(updatedInfo, articleId) {
    await Article.findOneAndUpdate({ _id: articleId }, updatedInfo);
}

async function deleteArticle(articleId) {
    await Article.findOneAndDelete({ _id: articleId });
}

module.exports = {
    create,
    update,
    deleteArticle,
    getArticlebyID,
    getArticles
}