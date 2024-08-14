const { Article } = require("../model/Article");
const { Comments } = require("../model/Comments");

async function getArticles() {
    let articles = await Article.find({});

    return articles;
}

async function getArticlebyID(articleId) {
    let article = await Article.find({ _id: articleId });

    return article;
}

async function getArticleByTopic(topic) {
    let articles = await Article.find({ topics: [topic] })
    
    return articles;
}

async function getLatestArticles() {
    let articles = await getArticles();

    articles.reverse();
    
    return articles;
}


async function create(articleInfo, userId) {
    let author = userId;
    let created = Date.now();
    let comments = [];

    let newArticle = new Article({ ...articleInfo, author, created, comments });

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

async function getArticleComments(articleId) {
    let article = await Article.findOne({ _id: articleId }).populate("comments").exec();

    return article.comments;
}

async function createComment(content, author, articleId) {
    let comment = new Comments({ content, author });

    let newComment = await comment.save();

    let article = await Article.findOne({ _id: articleId });

    article.comments.push(newComment._id.toString());

    await update(article, articleId);

    return newComment;
}

async function deleteComment(commentId, articleId) {
    await Comments.findOneAndDelete({ _id: commentId });

    let article = await Article.findOne({ _id: articleId });

    let index = article.comments.indexOf(commentId);

    article.comments.splice(index, 1);
    article.comments.map(comment => comment.toString());

    await update({ comments: article.comments.map(a => a.toString()) }, articleId)
}

module.exports = {
    create,
    update,
    deleteArticle,
    getArticlebyID,
    getArticles,
    getArticleByTopic,
    getLatestArticles, 
    getArticleComments,
    createComment,
    deleteComment
}