import {useParams} from "react-router-dom";

export default function ArticleDetails(){
    let {articleId} = useParams();

    return(
        <>
        <h1>{articleId}</h1>
        </>
    )
}