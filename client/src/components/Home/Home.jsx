import ArticleWithImage from "../Articles/ArticleWithImage";
import ArticleWithoutImage from "../Articles/ArticleWithoutImage";
import { useHomeArticles } from "../../hooks/useArticle";

// eslint-disable-next-line react/prop-types
export default function Home({ show }) {
    let articles = useHomeArticles(show);

    function distributeArticles(article) {
        if (article.img) {
            return <ArticleWithImage key={article._id} article={article} />
        } else {
            return <ArticleWithoutImage key={article._id} article={article} />
        }
    }

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {articles.map(article => distributeArticles(article))}
        </div>
    )
}