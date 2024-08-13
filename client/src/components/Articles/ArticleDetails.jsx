import {useParams} from "react-router-dom";
import { useArticleById } from "../../hooks/useArticle";

export default function ArticleDetails(){
    let {articleId} = useParams();
    let article = useArticleById(articleId);    
     
    return(
        <>
        <div className="bg-white text-gray-900 min-h-screen py-10 px-4">
    <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <img 
                src={article.img} 
                alt={article.title} 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
        </div>
        <h1 className="text-4xl font-bold text-green-600 mb-4">
            {article.title}
        </h1>                
        <div className="prose prose-lg whitespace-pre-line">
            {article.content}
        </div>
    </div>
    <footer className="mt-10 text-center text-pink-500">
        <p>© 2024 sayIt. All rights reserved.</p>
    </footer>
</div>

        </>
    )
}