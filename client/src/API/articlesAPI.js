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

async function getPopular(token) {
    let articles = await requesterAPI.get(DEFAULT_PATH + "/popular",token);

    return articles;
}   

async function getSaved(token) {  
    let articles = await requesterAPI.get(DEFAULT_PATH + "/saved",token);

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
   let data = requesterAPI.put(DEFAULT_PATH + "/delete/" + articleId,token);

   return data;
}

let articlesAPI = {
    getAll,
    getOne,
    getByTopic,
    getPopular,
    getSaved,
    create,
    update,
    del    
}

export default articlesAPI;