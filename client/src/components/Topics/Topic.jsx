import { useParams } from "react-router-dom"

export default function Topic() {
    let {topic} = useParams();

    return (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <h1>{topic}</h1>
            </div>
        )
    }