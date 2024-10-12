const JWT = require('jsonwebtoken')

const checkLogin = (req, res, next) => {
    if (req.session.user == null || req.session.user == undefined) {
        res.redirect('/admin')
    } else {
        next();
    }
}

const authJWT = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            throw new Error('Authorization Header is missing!')
        }
        const token = await req.header.authorization.split(" ")[1];
        const checkToken = await JWT.verify(token, "RANDOM-TOKEN");
        const user = await checkToken;
        req.user = user;
        next();
    } catch (error) {
    res.status(401).json; { ("Sorry,token not found. You cannot access for this action") }
    }
}
module.exports = { checkLogin ,authJWT}