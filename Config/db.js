require(`dotenv`).config();
const mongoose = require(`mongoose`);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connexion à MongoDB réussie`);
    } catch (err) {
        console.error(`Erreur de la connexion à MongoDB`, err);
        process.exit(1);
    }
};
module.exports = connectDB;