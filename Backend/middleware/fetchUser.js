const jwt = require('jsonwebtoken');

const JWT_SECRET = "MynameisMayank";

const fetchUser = (req, res, next) => {
    // Get the user from the jwt token and add id to the req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token 1"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token 2"})
    }
}

module.exports = fetchUser;