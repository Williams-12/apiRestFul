const jwt = require(`jsonwebtoken`);
const secretKey = `votre_clé_secrete`;

exports.authenticateJWT = (req, res, next) => {
    const token = req.header(`Authorization`)?.split(``)[1];
    if (!token) {
        return res.sendStatus(400);
    }
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};