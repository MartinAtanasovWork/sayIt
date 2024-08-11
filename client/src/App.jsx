import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigations/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Policy from "./components/Policies/Policy";
import Topic from "./components/Topics/Topic";
import ArticleDetails from "./components/Articles/ArticleDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="flex">
            <Navigation />

            <div className="flex-grow p-4">
                <Routes>
                    <Route path="/" element={<Home show="all" />} />
                    <Route path="/popular" element={<Home show="popular" />} />
                    <Route path="/liked" element={<Home show="liked" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/topics/:topic" element={<Topic />} />
                    <Route path="/articles/details/:articleId" element={<ArticleDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
