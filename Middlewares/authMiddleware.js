const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'votre_clé_secrete';

// vérifier le token
exports.authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token manquant'});

    }
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Token invalide', error: err });
        }
        req.user = user;
        next();
    });
};