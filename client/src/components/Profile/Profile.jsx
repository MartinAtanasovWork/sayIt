import { useContext, useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import useAuthentication from "../../hooks/useAuthentication";

const avatars = [
    "/Avatars/avatar1.png",
    "/Avatars/avatar2.png",
    "/Avatars/avatar3.png",
    "/Avatars/avatar4.png",
    "/Avatars/avatar5.png",
    "/Avatars/avatar6.png",
    "/Avatars/avatar7.png",
    "/Avatars/avatar8.png",
    "/Avatars/avatar9.png"
];

export default function UserProfile() {
    let { changeAuthData } = useContext(AuthContext);
    let { currentUser, changeCurrentUser } = useUser();
    let [user, setUser] = useState();
    let [selectedAvatar, setSelectedAvatar] = useState("");
    let {logout} = useAuthentication();
    let navigate = useNavigate();

    useEffect(() => {
        (async () => {
            let userData = await currentUser();
            setSelectedAvatar(userData.avatar);
            setUser(userData);
        })()
    }, []);

    function changeAvatar(avatar) {
        setSelectedAvatar(avatar);
    }

    async function onChangeUser() {
        let updatedUser = await changeCurrentUser({ ...user, avatar: selectedAvatar });
        changeAuthData(updatedUser);
        navigate("/");
    }

    async function logoutHandler() {   
        await logout();

        changeAuthData({});

        navigate("/");
    }

    return (
        <div className="min-h-screen bg-white text-gray-800 p-8 flex flex-col items-center">
            <div className="bg-green-100 p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img
                            src={selectedAvatar}
                            alt="Selected Avatar"
                            className="w-16 h-16 rounded-full"
                        />
                        <h2 className="text-green-900 heading-2 ml-3">{user ? user.email : ""}</h2>
                    </div>
                    <button
                        onClick={logoutHandler}
                        className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-500 transition-colors duration-300"
                    >
                        Logout
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {avatars.map((avatar, index) => (
                        <div
                            key={index}
                            className={`w-full h-32 rounded-lg overflow-hidden cursor-pointer border-2 ${
                                selectedAvatar === avatar
                                    ? "border-pink-500"
                                    : "border-transparent"
                            }`}
                            onClick={() => changeAvatar(avatar)}
                        >
                            <img
                                src={avatar}
                                alt={`Avatar ${index + 1}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <button
                        onClick={onChangeUser}
                        className="w-full mt-5 bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 transition-colors duration-300 focus:ring-4 focus:ring-pink-300"
                    >
                        Change avatar
                    </button>
                </div>
            </div>
        </div>
    );
}
