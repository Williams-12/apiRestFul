// chargement des variables d'environnement
require(`dotenv`).config();
const express = require(`express`);
const connectDB = require(`./Config/db`);
const bookRoutes = require(`./Routes/bookRoutes`);
const authorRoutes = require(`./Routes/authorRoutes`);
const authRoutes = require(`./Routes/authRoutes`);

const app = express();
const port = process.env.PORT || 3000;
// Middleware pour parser le corps de la requete
app.use(express.json())

// connexion à la base de données
connectDB();

app.use(`/books`, bookRoutes);
app.use(`/authors`, authorRoutes);
app.use(`/auth`, authRoutes);

app.listen(port, () => {
    console.log(`Serveur demarrer sur http://localhost:${port}`);

});