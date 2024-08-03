import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function NavUser() {
    let [isLoggedIn, setIsLoggedIn] = useState(true);
    let [openLoginTab,setOpenLoginTab] = useState(false);

    useEffect(() => {
        (async () => {
            let user = localStorage.getItem("Auth-Token");

            // make request to check the token
            let request = !!user;

            setIsLoggedIn(request);
        })()
            ;
    }, []);

    function OpenLoginTab(){
        setOpenLoginTab(true);
    }

    function closeLoginTab(){
        setOpenLoginTab(false);
    }

    return (
        <>
            {
                isLoggedIn ?
                    (<div className="p-4 mt-5 border-t border-gray-200 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Link to="/user/me">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full"
                                />
                            </Link>
                            <div className="text-sm">
                                <Link to="/users/me" className="font-bold text-green-600">John Doe</Link>
                                <div className="text-gray-400">john.doe@example.com</div>
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
                    </div>) :
                    (<div className="p-4 border-t border-gray-200 flex items-center justify-center">
                        <button onClick={OpenLoginTab} className="text-pink-500 hover:text-pink-700 font-bold">
                            Login
                        </button>
                    </div>)
            }

            <Login isVisible={openLoginTab} closeFunc={closeLoginTab} />
        </>
    )
}