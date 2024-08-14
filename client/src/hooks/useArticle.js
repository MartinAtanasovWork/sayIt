import React, { useContext, useState } from "react";

import articlesAPI from "../API/articlesAPI";
import { AuthContext } from "../contexts/AuthContext";

export function useArticle() {
    let { token } = useContext(AuthContext);
    let [articles, setArticles] = useState([]);
    let [article, setArticle] = useState({});
    let Effect = React.useEffect;

    function homeArticles(show) {
        Effect(() => {
            (async () => {
                let data = [];

                switch (show) {
                    case "all":
                        data = await articlesAPI.getAll();
                        break;
                    case "latest":
                        data = await articlesAPI.getLatest();
                        break;                  
                }

                setArticles(data);
            })()
        }, [show]);

        return articles;
    }

    function topicArticles(topic) {
        Effect(() => {
            (async () => {
                let data = await articlesAPI.getByTopic(topic);

                setArticles(data);
            })()
        }, [topic]);

        return articles;
    }

    function articleById(id) {
        Effect(() => {
            (async () => {
                let data = await articlesAPI.getOne(id);

                setArticle(data[0]);
            })()
        }, [id]);

        return article;
    }

    async function createArticle(articleInfo, image) {
        let reqBody = {
            ...articleInfo,
            topics: [articleInfo.topic]
        }

        let url = await uploadImageAndGetUrl(image);

        reqBody.img = url;

        let result = await articlesAPI.create(reqBody, token);

        return result;
    }

    async function updateArticle(articleId, articleInfo, image) {
        let reqBody = {
            ...articleInfo
        }
        let url = await uploadImageAndGetUrl(image);

        reqBody.img = url;

        let result = await articlesAPI.update(articleId, reqBody, token);


        return result;
    }

    async function deleteArticle(articleId) {
        await articlesAPI.del(articleId, token);
    }

    async function uploadImageAndGetUrl(image) {
        const reqData = new FormData();

        reqData.append("file", image);
        reqData.append("upload_preset", "say-it-artilce-images");
        reqData.append("api_key", "556548734387574");

        let req = await fetch("https://api.cloudinary.com/v1_1/dnhzfcuga/image/upload", {
            method: "post",
            body: reqData
        });

        let result = await req.json();

        return result.secure_url;
    }

    async function getComments(articleId) {
        let data = await articlesAPI.getComments(articleId);
                   
        return data;
    }

    async function createComment(body){
        let comment = await articlesAPI.createComment(body,token);

        return comment;
    }

    async function deleteComment(commentId,articleId) {
        await articlesAPI.deleteComment(commentId,articleId);  
    }

    return {
        homeArticles,
        topicArticles,
        articleById,
        createArticle,
        updateArticle,
        deleteArticle,
        getComments,
        createComment,
        deleteComment
    }
}