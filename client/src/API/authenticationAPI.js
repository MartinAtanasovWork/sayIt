import requesterAPI from "./requester";

const DEFAULT_URL = "http://localhost:3000/user";

async function login(email, password) {
    let data = await requesterAPI.post(DEFAULT_URL + "/login", { email, password });

    return data;
}

async function register(email, password) {
    let data = await requesterAPI.post(DEFAULT_URL + "/register", { email, password });

    return data;
}

async function logout(token) {
    await requesterAPI.get(DEFAULT_URL + "/logout", token)
}

async function currentUser(token) {
    let user = await requesterAPI.get(DEFAULT_URL + "/me", token);

    return user;
}

async function changeCurrentUser(userInfo,token) {
    let user = await requesterAPI.put(DEFAULT_URL + "/me/update",userInfo,token);

    return user;  
}

let authenticationAPI = {
    login,
    register,
    logout,
    currentUser,
    changeCurrentUser
}

export default authenticationAPI;