// Chargement des variables d'environnement
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./Routes/bookRoute');
const authorRoutes = require('./Routes/authorRoutes');
const authRoutes = require('./Routes/authRoute');

const app = express();
const port = process.env.PORT || 3000;

// Middleware analyser le corsp des requetes
app.use(express.json());
app.use(cors());

// Connexion à la base de donnée
connectDB();

// Définition des routes
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/auth', authRoutes);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en cour d'execussion dut http://localhost:${port}`);
})