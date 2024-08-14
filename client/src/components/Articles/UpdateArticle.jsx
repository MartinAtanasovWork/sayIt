import { useNavigate, useParams } from "react-router-dom"

import { useContext, useEffect, useRef, useState } from "react";
import { useArticle } from "../../hooks/useArticle";
import { AuthContext } from "../../contexts/AuthContext";
import NotFound from "../NotFound/NotFound";

export default function EditArticle() {
    let { isLogged} = useContext(AuthContext);
    let { articleId } = useParams();
    let { articleById, updateArticle } = useArticle();
    let article = articleById(articleId);
    let navigate = useNavigate();

    let titleRef = useRef();
    let contentRef = useRef();

    async function submitHandler(e) {
        e.preventDefault();

        // validate fileds and image

        const title = titleRef.current.value;
        const content = contentRef.current.value;
        
        let values = {
            title,
            content
        }
   
        let result = await updateArticle(articleId,values, image);

        navigate("/articles/details/" + result._id);
    }
   
    useEffect(() => { 
        titleRef.current.value = article.title;   
        contentRef  .current.value = article.content;     
        setPreview(article.img);
        setImage(article.img);
    }, [article]);

    const [image, setImage] = useState(undefined);
    const [preview, setPreview] = useState(article.img);

    function changeImage(e) {
        setImage(e.target.files[0]);

        let file = new FileReader;

        file.onload = function () {
            setPreview(file.result);
        }

        file.readAsDataURL(e.target.files[0])
    }



    return (
        <>
        {!isLogged ? <NotFound /> :
        <div className="bg-white text-gray-900 min-h-screen py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <form onSubmit={submitHandler}>
                    <div className="mb-8">
                        <img
                            src={preview}
                            alt="alt"
                            className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={changeImage}
                            className="block w-full text-gray-900 bg-gray-200 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                        />
                    </div>

                    {/* Title and Save Button in a Flex Container */}
                    <div className="flex items-center justify-between mb-4">
                        <input
                            type="text"
                            name="title"
                            ref={titleRef}
                            className="text-4xl font-bold text-green-600 w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="Enter title"
                        />
                    </div>

                    <textarea
                        name="content"
                        ref={contentRef}
                        className="prose prose-lg whitespace-pre-line w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                        rows="10"
                        placeholder="Enter content"
                    />

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <footer className="mt-10 text-center text-pink-500">
                <p>© 2024 sayIt. All rights reserved.</p>
            </footer>
        </div>
}
        </>
    );
}
