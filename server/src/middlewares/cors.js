function cors() {
    return function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.setHeader('Access-Control-Allow-Methods',
            'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Expose-Headers', "Auth-Token");    
        res.setHeader('Access-Control-Allow-Headers',
            'Content-Type, Auth-Token');
        next();
    }
}

module.exports ={
    cors
}