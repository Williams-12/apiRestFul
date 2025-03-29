require('dotenv').config();
const mongoose = require('mongoose');

// Fonction de connexion à MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connexion à MongoDB réussie');

    } catch (error) {
        console.error('Erreur de connexion à MongoDB');
        // Arreter l'application en cas d'échec de connexion
        process.exit(1);
    }
};

// exportation du module
module.exports = connectDB;