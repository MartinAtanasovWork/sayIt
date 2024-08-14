import { useNavigate, useParams } from "react-router-dom";
import { useArticle } from "../../hooks/useArticle";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function ArticleDetails() {
    let { id: loggedInUserId, isLogged } = useContext(AuthContext);
    let { articleId } = useParams();
    let { articleById, deleteArticle, getComments, createComment,deleteComment } = useArticle();
    let article = articleById(articleId)
    let [comments, setComments] = useState([]);
    let [isOwner, setIsOwner] = useState(false);
    let navigate = useNavigate();
    let [newComment, setNewComment] = useState("");
    let [loadComments, setLoadComments] = useState(true);

    useEffect(() => {
        if (isLogged && article) {
            setIsOwner(loggedInUserId === article.author);
        }

        (async () => {
            let data = await getComments(articleId);
            setComments(data);
        })();
    }, [isLogged, article, loggedInUserId, loadComments]);

    function handleEdit() {
        navigate("/articles/edit/" + articleId);
    }

    function handleDelete() {
        if (confirm("Are you sure you want to delete your article?")) {
            deleteArticle(articleId);
            navigate("/");
        }
    }

    function commentChangeHandler(e) {
        setNewComment(e.target.value);
    }

    async function addCommentHandler() {
        if (newComment !== "") {
            let body = {
                content: newComment,
                articleId
            }

            await createComment(body);
            setLoadComments(oldValue => !oldValue);
            setNewComment("");
        }
    }

    async function deleteCommnentHandler(id) {
        await deleteComment(id,articleId);      
        setLoadComments(oldValue => !oldValue);
    }

    return (
        <div className="bg-white text-gray-900 min-h-screen py-10 px-4 flex-grow">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </div>

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

                {/* Comments Section */}
                <div className="mt-10 flex-grow">
                    <h2 className="text-2xl font-semibold mb-4">Comments</h2>

                    <div className="space-y-4">
                        {comments.map((comment, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-4 rounded-lg shadow"
                            >
                                <div className="flex justify-between items-start">
                                    <p className="flex-grow">{comment.content}</p>
                                    {loggedInUserId == comment.author && 
                                    <button
                                        onClick={() => deleteCommnentHandler(comment._id)}
                                        className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-500 transition-colors duration-200 ml-4"
                                    >
                                        Delete
                                    </button>}
                                </div>
                            </div>
                        ))}
                    </div>

                    {isLogged && (
                        <div className="mt-6">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                rows="4"
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={commentChangeHandler}
                            ></textarea>
                            <button
                                onClick={addCommentHandler}
                                className="mt-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300"
                            >
                                Add Comment
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <footer className="mt-10 text-center text-pink-500">
                <p>© 2024 sayIt. All rights reserved.</p>
            </footer>
        </div>
    );
}
