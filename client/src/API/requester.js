async function get(url, token) {
    let tokenHeader = token ? { "Auth-Token": token } : {};

    let requestInfo = {
        method: "get",
        headers: tokenHeader
    }

    let request = await fetch(url, requestInfo);
    let data = await request.json();

    return data;
}

async function post(url, body, token) {
    let tokenHeader = token ? { "Auth-Token": token } : {};

    let requestInfo = {
        method: "post",
        headers: { "Content-Type": "application/json", ...tokenHeader },
        body: JSON.stringify(body)
    }

    let request = await fetch(url, requestInfo);
    let data = await request.json();

    return data;
}

async function put(url, body, token) {
    let tokenHeader = token ? { "Auth-Token": token } : {};

    let requestInfo = {
        method: "put",
        headers: { "Content-Type": "application/json", ...tokenHeader },
        body: JSON.stringify(body)
    }

    let request = await fetch(url, requestInfo);
    let data = await request.json();

    return data;
}

async function del(url, token) {
    let tokenHeader = token ? { "Auth-Token": token } : {};

    let requestInfo = {
        method: "delete",
        headers: { ...tokenHeader }
    }

    await fetch(url, requestInfo);
}

let requesterAPI = {
    get,
    post,
    put,
    del
}

export default requesterAPI;