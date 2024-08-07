const { Article } = require("../model/Article");

async function getArticlebyID(articleId) {
    let article = await Article.find({ _id: articleId });

    return article;
}

async function create(articleInfo) {
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
    getArticlebyID
}