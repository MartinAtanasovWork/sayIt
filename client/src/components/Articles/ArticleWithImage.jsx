/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ArticleWithImage(props){    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-200">
            <img className="w-full h-40 object-cover" src={props.article.img} alt="Image 1" />
            <div className="p-4 bg-green-50">
                <Link to={"/articles/details/" + props.article._id} className="text-lg font-semibold text-green-800 mb-2"><h3>{props.article.title}</h3></Link>
                <p className="text-green-700">{props.article.content.slice(0,130) + "..."}</p>
            </div>
        </div>
    )
}