const { getArticleComments, createComment, deleteComment } = require("../services/article");

async function getArticleCommentsController(req,res) {
    let articleId = req.params.articleId;

    let comments = await getArticleComments(articleId);

    res.json(comments);
    res.end();
}

async function createCommentController(req,res) {
    let content = req.body.content;
    let articleId = req.body.articleId;
    let userId = req.user._id; 

    let comment = await createComment(content,userId,articleId);
    
    res.json(comment);
    res.end();
}

async function deleteCommentController(req,res) {
     let commentId = req.body.commentId;
     let articleId = req.body.articleId;    

    await deleteComment(commentId,articleId);

    res.json({success:"success"})
    res.end();
}

module.exports={
    getArticleCommentsController,
    createCommentController,
    deleteCommentController
}