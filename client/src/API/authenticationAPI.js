import requesterAPI from "./requester";

const DEFAULT_URL = "http://localhost:3000/user";

async function login(email,password) {
    let data = await requesterAPI.post(DEFAULT_URL + "/login",{email,password});

    return data;
}

async function register(email,password) {
    let data = await requesterAPI.post(DEFAULT_URL + "/register",{email,password});
    
    return data;
}

async function logout(){
    await requesterAPI.get(DEFAULT_URL + "/logout");
    
    // delete token from localstorage
}