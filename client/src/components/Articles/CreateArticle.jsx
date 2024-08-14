import { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useArticle } from '../../hooks/useArticle';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import NotFound from '../NotFound/NotFound';

export default function CreateArticle() {
    let { isLogged} = useContext(AuthContext);
    let { createArticle } = useArticle();
    let navigate = useNavigate();

    async function submitCallback(values) {   
        let result = await createArticle(values, image);

        navigate("/articles/details/" + result._id);
    }
    let { values, changeHandler, submitHandler } = useForm({
        title: "",
        content: "",
        topic: "",
    }, submitCallback);

    let [image, setImage] = useState(null);
    let [preview, setPreview] = useState("");

    function changeImage(e) {
        setImage(e.target.files[0]);

        let file = new FileReader;

        file.onload = function () {
            setPreview(file.result);
        }

        file.readAsDataURL(e.target.files[0])
    }

    return (<>
        {!isLogged ? <NotFound /> : 
        <div className="bg-white text-gray-900 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-green-600 mb-6">Create New Article</h1>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={values.title}
                            onChange={changeHandler}
                            required
                            className="w-full p-2 border border-green-600 rounded-lg focus:outline-none focus:border-green-800"
                            placeholder="Enter article title"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            accept="image/*"
                            required
                            onChange={changeImage}
                            className="w-full p-2 border border-green-600 rounded-lg focus:outline-none focus:border-green-800"
                        />
                        <img src={preview} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={values.content}
                            onChange={changeHandler}
                            required
                            className="w-full p-2 border border-green-600 rounded-lg focus:outline-none focus:border-green-800"
                            rows="10"
                            placeholder="Enter article content"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
                            Topic
                        </label>
                        <select
                            id="topic"
                            name="topic"
                            value={values.topic}
                            required
                            onChange={changeHandler}
                            className="w-full p-2 border border-green-600 rounded-lg focus:outline-none focus:border-green-800"
                        >
                            <option value="" disabled>Select a topic</option>
                            <option value="culinary-and-recipes">Culinary and Recipes</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                            <option value="movies-and-shows">Movies and Shows</option>
                            <option value="celebrities">Celebrities</option>
                        </select>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-800"
                        >
                            Create Article
                        </button>
                    </div>
                </form>
            </div>
        </div>
        }
    </>);
}