const User = require(`../Models/userModel`);
const jwt = require(`jsonwebtoken`);
const secretKey = `votre_clé_secrete`;

exports.register = async(req,res) => {
    const {username,password} = req.body;
    try {
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({message: `Nom d'utilisateur deja pris`});
        }
        const newUser = new User({username,password});
        await newUser.save();
        return res.status(200).json({message: `Utilisateur créé avec succes`});
    } catch (error) {
        res.status(500).json({message: `Erreur lors de l'inscription`, err});
    }
};

exports.login= async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user || !(await user.comparePassword(password))){
        return res.status(400).json({message: `ìdentifiants incorrects`});
    }
    const token = jwt.sign({sub: user._id, username: user.username}, secretKey, {expiresIn: `1h`});
    res.json({token});
};