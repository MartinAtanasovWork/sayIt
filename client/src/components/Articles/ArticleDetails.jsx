import { useNavigate, useParams } from "react-router-dom";
import { useArticle } from "../../hooks/useArticle";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function ArticleDetails() {
    let { id: loggedInUserId, isLogged } = useContext(AuthContext);
    let { articleId } = useParams();
    let { articleById, deleteArticle } = useArticle();
    let article = articleById(articleId);
    let [isOwner, setIsOwner] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        if (isLogged && article) {
            setIsOwner(loggedInUserId === article.author);
        }
    }, [isLogged, article, loggedInUserId]);

    function handleEdit() {
        navigate("/articles/edit/" + articleId);
    }

    function handleDelete() {
        if (confirm("Are you sure you want to delete your article?")) {
            deleteArticle(articleId);
            navigate("/");
        }
    }

    return (
        <div className="bg-white text-gray-900 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Title and Buttons in a Flex Container */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-4xl font-bold text-green-600">
                        {article.title}
                    </h1>
                    {isOwner && (
                        <div className="flex space-x-4">
                            <button
                                onClick={handleEdit}
                                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300"
                            >
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition-colors duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>

                <div className="prose prose-lg whitespace-pre-line">
                    {article.content}
                </div>
            </div>
            <footer className="mt-10 text-center text-pink-500">
                <p>© 2024 sayIt. All rights reserved.</p>
            </footer>
        </div>
    );
}
