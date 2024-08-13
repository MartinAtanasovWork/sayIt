/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ArticleWithoutImage(props) {
    return (
        <div className="bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-200 flex items-center justify-center p-6">
            <div className="p-6 text-center">
                <Link to={"/articles/details/" + props.article._id}><h3 className="text-lg font-semibold text-green-800 mb-2 m-auto">{props.article.title}</h3></Link>
                <p className="text-green-700 mb-4">{props.article.content.slice(0,20) + "..."}</p>
            </div>
        </div>
    )
}