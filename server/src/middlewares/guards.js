const { verifyToken } = require("../services/token");
const { invalidateToken } = require("../services/token");

async function isUser(req, res, next) {
    let token = req.headers["auth-token"];

    if (!token) {
        res.status(401);
        res.json({ error: "Unauthenticated request" });
        res.end();
    }

    let result = verifyToken(token);

    if (!result) {
        invalidateToken(token);
        res.status(403);
        res.json({ error: "Unauthorized request" });
        res.end();
    }

    next();
}

module.exports = {
    isUser
}