import { useEffect, useState } from "react";

import articlesAPI from "../API/articlesAPI";

export function useHomeArticles(show) {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            let data = [];

            switch (show) {
                case "all":
                    data = await articlesAPI.getAll();
                    break;
                case "popular":
                    data = await articlesAPI.getPopular();
                    break;
                case "saved":
                    data = await articlesAPI.getSaved();
                    break;
            }

            setArticles(data);
        })()
    }, [show]);

    return articles;
}

export function useTopicArticles(topic) {
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            let data = await articlesAPI.getByTopic(topic);

            setArticles(data);
        })()
    }, [topic]);

    return articles;
}

export function useArticleById(id){
    let [article,setArticle] = useState([]);
    
    useEffect(() => {
        (async () => {
            let data = await articlesAPI.getOne(id);
                        
            setArticle(data[0]);
        })()
    }, [id]);

    return article;
} 
