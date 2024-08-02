import { useState } from "react";
import { Link } from "react-router-dom";
import NavUser from "./NavUser";

export default function Navigation() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isPolicyOpen, setIsPolicyOpen] = useState(false);

    function toggleSettings() {
        setIsSettingsOpen(oldSettings => !oldSettings);
    }

    function togglePolicy() {
        setIsPolicyOpen(oldPolicy => !oldPolicy);
    }

    return (
        <div className="h-screen w-64 bg-white text-gray-800 flex flex-col border-r border-gray-200">
            {/* Logo Section */}
            <div className="p-4 flex items-center justify-center">
                <Link to="/" className="text-xl font-bold text-green-600">sayIt</Link>
            </div>
            <hr className="border-gray-200" />

            {/* Search Bar */}
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full p-2 border border-green-600 rounded-2xl focus:outline-none focus:border-green-800"
                />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-grow flex-col p-4 space-y-2">
                <Link to="/most-liked" className="hover:bg-green-100 hover:text-green-600 p-2 rounded">
                    Most Liked
                </Link>
                <Link to="/liked-by-you" className="hover:bg-green-100 hover:text-green-600 p-2 rounded">
                    Liked by you
                </Link>

                {/* Settings */}
                <div className="relative">
                    <button
                        onClick={toggleSettings}
                        className="w-full text-left hover:bg-green-100 hover:text-green-600 p-2 rounded flex items-center justify-between"
                    >
                        <span>Topics</span>
                        <svg
                            className={`transform transition-transform duration-200 ${isSettingsOpen ? 'rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isSettingsOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                            <Link to="/topics/culinary-and-recipes" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Culinary and Recipes
                            </Link>
                            <Link to="/topics/sports" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Sports
                            </Link>
                            <Link to="/topics/technology" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Technology
                            </Link>
                            <Link to="/topics/movies-and-shows" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Movies and  Shows
                            </Link>
                            <Link to="/topics/celebrities" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Celebrities
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/me" className="hover:bg-green-100 hover:text-green-600 p-2 rounded">
                    Profile
                </Link>

                {/* Policy */}
                <div className="relative">
                    <button
                        onClick={togglePolicy}
                        className="w-full text-left hover:bg-green-100 hover:text-green-600 p-2 rounded flex items-center justify-between"
                    >
                        <span>Policy</span>
                        <svg
                            className={`transform transition-transform duration-200 ${isPolicyOpen ? 'rotate-180' : 'rotate-0'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isPolicyOpen && (
                        <div className="mt-2 space-y-2 pl-4">
                            <Link to="/policy/content-policy" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Content Policy
                            </Link>
                            <Link to="/policy/privacy-policy" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                Privacy Policy
                            </Link>
                            <Link to="/policy/user-policy" className="block hover:bg-green-100 hover:text-green-600 p-2 rounded">
                                User Policy
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* User */}
            <NavUser />   
                     
        </div>
    );
}