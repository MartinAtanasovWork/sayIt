import requesterAPI from "./requester"

const DEFAULT_PATH = "http://localhost:3000/articles"

async function getAll() {
    let articles = await requesterAPI.get(DEFAULT_PATH);

    return articles;
}

async function getOne(articleId) {
    let article = await requesterAPI.get(DEFAULT_PATH + "/" + articleId);

    return article;
}

async function create(articleInfo) {
    let article = await requesterAPI.post(DEFAULT_PATH + "/create", articleInfo);

    return article;
}

async function update(articleId, articleInfo) {
    let article = await requesterAPI.put(DEFAULT_PATH + "/update/" + articleId, articleInfo);

    return article;
}

async function del(articleId) {
   let data = requesterAPI.put(DEFAULT_PATH + "/delete/" + articleId);

   return data;
}

let articlesAPI = {
    getAll,
    getOne,
    create,
    update,
    del    
}

export default articlesAPI;