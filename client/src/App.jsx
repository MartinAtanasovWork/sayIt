import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "./contexts/AuthContext";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigations/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Policy from "./components/Policies/Policy";
import Topic from "./components/Topics/Topic";
import ArticleDetails from "./components/Articles/ArticleDetails";
import NotFound from "./components/NotFound/NotFound";
import UpdateArticle from "./components/Articles/UpdateArticle";
import CreateArticle from "./components/Articles/CreateArticle";
import UserProfile from "./components/Profile/Profile";
import Persisted from "./components/PersistedComponent/Persisted";

function App() {
    let [authData, setAuthData] = useState({});

    function changeAuthData(data, token) {
        if (!data.user) {
            setAuthData({});
            return;
        }

        let newData = {
            email: data.user.email,
            avatar: data.user.avatar,
            id: data.user._id,
            token: token  || data["Auth-Token"]
        }

        setAuthData(newData);
    }

    let contextData = {
        email: authData.email,
        token: authData.token,
        id: authData.id,
        avatar: authData.avatar,
        isLogged: !!authData.email,
        changeAuthData
    }

    return (
        <AuthContext.Provider value={contextData}>
            <div className="flex">
                <Navigation />

                <div className="flex-grow p-4">
                    <Routes>
                        <Route element={<Persisted />}>
                            <Route path="/" element={<Home show="all" />} />
                            <Route path="/latest" element={<Home show="latest" />} />

                            <Route path="/topics/:topic" element={<Topic />} />
                            
                            <Route path="/policy" element={<Policy />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="register" element={<Register />} />

                            <Route path="/articles/details/:articleId" element={<ArticleDetails />} />
                            <Route path="/articles/create" element={<CreateArticle />} />
                            <Route path="/articles/edit/:articleId" element={<UpdateArticle />} />

                            <Route path="/users/me" element={<UserProfile />} />

                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
