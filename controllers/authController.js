const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'Votre_clé_secrete';

// Inscription d'un nouvel utilisateur
exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Nom d'utilisateur déja pris" });
        }
        const newUser = new User({ username, password });
        await newUser.save();
        return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de l\'inscription", error });
    }
};

// Connexion utilisateur
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: "Identifiants incorrects" });
        }
        const token = jwt.sign({ sub: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
        return res.json({ token });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la connexion", error })
    }
};