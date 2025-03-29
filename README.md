# book-app-api

Une API RESTful permettant aux utilisateurs de gérer une bibliothèque de livres avec des fonctionnalités CRUD et une authentification sécurisée via JWT.

# Fonctionnalités  

-  **CRUD Livres** : Ajouter, modifier, supprimer et afficher les livres  
-  **CRUD Auteurs** : Gérer les auteurs associés aux livres  
-  **Authentification** : Inscription et connexion des utilisateurs avec JWT  
-  **Sécurisation** : Certaines routes sont protégées par une authentification  

---

# Cloner le projet
```bash
git clone git@github.com:Williams-12/apiRestFul.git
cd apiRestFul

# Installation des indépendances
 npm install
Express jsonwebtoken bcrypt mongosse cors

# configuration
création de fichier .env dans lequel se trouve le code suivant:
MONGO_URI = mongodb+srv://williamstchegoun30:oeQcRJxQ1CVHlx9t@cluster0.eur51br.mongodb.net/bibliotheque
PORT = 3000
JWT_SECRET = votre_clé_secrete

# Demarer le server
node server.js
Serveur en cour d'execussion sur: http://localhost:3000

# Les routes de l'API

   # Authentification
POST    /auth/register   //*Inscription d’un utilisateur*
POST    /auth/login  //*Connexion et récupération d’un token*

   # Livres
   Méthode  Route   Description
GET /books  Récupérer tous les livres
POST    books  Ajouter un livre ( JWT)
GET /books/:id  Afficher un livre
PUT /books/:id  Modifier un livre ( JWT)
DELETE  /books/:id  Supprimer un livre ( JWT)

    # Auteurs
GET /authors    Récupérer tous les auteurs
POST    /authors    Ajouter un auteur ( JWT)
PUT /authors/:id    Modifier un auteur ( JWT)
DELETE  /authors/:id    Supprimer un auteur ( JWT)    

#Technologies utilisées

Node.js pour le backend
Express.js pour les routes
MongoDB pour la base de données
Mongoose pour la gestion des données
JWT pour l'authentification
Postman  pour tester les requêtes

# Exécution
Tester avec Postman
1 Ouvrez Postman
2 Envoyer des requêtes à l’API, par exemple :

Inscription : POST http://localhost:5000/auth/register

Connexion : POST http://localhost:5000/auth/login

Obtenir la liste des livres : GET http://localhost:3000/books