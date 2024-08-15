import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import Login from "../Login/Login";

export default function NavUser() {
    let { email, avatar, isLogged } = useContext(AuthContext);
    let [openLoginTab, setOpenLoginTab] = useState(false);

    function OpenLoginTab() {
        setOpenLoginTab(true);
    }

    function closeLoginTab() {
        setOpenLoginTab(false);
    }

    return (
        <>
            {
                isLogged ?
                    (
                        <div className="p-4 mt-5 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Link to="/users/me">
                                    <img
                                        src={avatar}
                                        alt="User Avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </Link>

                                <div className="text-sm">
                                    <Link to="/users/me" className="font-bold text-green-600">{email}</Link>
                                </div>
                            </div>

                            <Link to="/users/me" className="text-pink-500 hover:text-pink-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    width="24"
                                    height="24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6-4v8" />
                                </svg>
                            </Link>

                        </div>
                    )
                    :
                    (
                        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
                            <button onClick={OpenLoginTab} className="text-pink-500 hover:text-pink-700 font-bold flex-1 text-center">
                                Login
                            </button>

                            <Link to="/register" className="text-pink-500 hover:text-pink-700 font-bold flex-1 text-center">
                                Sign up
                            </Link>
                        </div>
                    )
            }

            <Login isVisible={openLoginTab} closeFunc={closeLoginTab} />
        </>
    )
}