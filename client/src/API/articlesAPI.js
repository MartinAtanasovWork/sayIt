import requesterAPI from "./requester"

const DEFAULT_PATH = "http://localhost:3000/articles"

async function getAll(token) {
    let articles = await requesterAPI.get(DEFAULT_PATH,token);

    return articles;
}

async function getOne(articleId,token) {
    let article = await requesterAPI.get(DEFAULT_PATH + "/details/" + articleId,token);

    return article;
}

async function getByTopic(topic,token) {
    let articles = await requesterAPI.get(DEFAULT_PATH + "/topics/" + topic,token);

    return articles;
}

async function getLatest(token) {
    let articles = await requesterAPI.get(DEFAULT_PATH + "/latest",token);

    return articles;
}   

async function create(articleInfo,token) { 
    let article = await requesterAPI.post(DEFAULT_PATH + "/create", articleInfo,token);

    return article;
}

async function update(articleId, articleInfo,token) {
    let article = await requesterAPI.put(DEFAULT_PATH + "/update/" + articleId, articleInfo,token);

    return article;
}

async function del(articleId,token) {
  await requesterAPI.del(DEFAULT_PATH + "/delete/" + articleId,token);
}  

async function getComments(articleId) {
    let comments = await requesterAPI.get(DEFAULT_PATH + "/comments/" + articleId);
    
    return comments;
}

async function createComment(body,token) {
    let comment = await requesterAPI.post(DEFAULT_PATH + "/comments/create",body,token);

    return comment;
}

async function deleteComment(commentId,articleId) {
    await requesterAPI.post(DEFAULT_PATH + "/comments/delete",{commentId,articleId});     
}

let articlesAPI = {
    getAll,
    getOne,
    getByTopic,
    getLatest, 
    create,
    update,
    del,
    getComments,
    createComment,
    deleteComment    
}

export default articlesAPI;