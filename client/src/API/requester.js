async function get(url){
    let request = await fetch(url);
    let data = await request.json();
    
    return data;
}

async function post(url,body){
    let requestInfo = {
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    }

    let request = await fetch(url,requestInfo);
    let data = await request.json();
   
    return data;
} 

async function put(url,body){
    let requestInfo = {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    }

    let request = await fetch(url,requestInfo);
    let data = await request.json();
   
    return data;
} 

async function del(url){
    let requestInfo = {
        method:"delete",
        headers:{}
    }

    let request = await fetch(url,requestInfo);
    let data = await request.json();
   
    return data;
} 

let requesterAPI = {
    get,
    post,
    put,
    del
}

export default requesterAPI;