Fichier `README.md` :

 API de Gestion de Bibliothèque

Cette API permet de gérer une bibliothèque de livres et d'auteurs avec des fonctionnalités telles que la création, la lecture, la mise à jour et la suppression (CRUD), ainsi qu'une authentification via **JWT**.

Fonctionnalités

- CRUD des livres
- CRUD des auteurs
- Authentification utilisateur avec JWT
- Sécurisation des routes avec JWT

Prérequis

Avant de commencer, assurez-vous que vous avez installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version >= 14)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) pour la base de données.

Installation

 1. Clonez le repository

Clonez ce repository sur votre machine locale :

```bash
git clone git@github.com:Williams-12/apiRestFul.git
```

 2. Installation des dépendances

Placez-vous dans le dossier du projet et installez les dépendances avec npm :

```bash
cd nom_du_repo
npm install
```

 3. Configuration de la base de données

Créez un fichier `.env` à la racine du projet et ajoutez votre URI de connexion MongoDB :

```plaintext
MONGO_URL="votre_chaine_de_connexion_mongodb"
JWT_SECRET="votre_cle_secrete_pour_jwt"
```

4. Lancer le serveur

Une fois que tout est configuré, lancez le serveur avec la commande suivante :

```bash
npm start
```

Le serveur démarrera sur `http://localhost:3000`.

 Routes API

 Authentification

- POST /auth/register : Crée un nouvel utilisateur.
- POST /auth/login : Connecte un utilisateur et génère un token JWT.

 Livres

- GET /books : Récupère la liste de tous les livres.
- POST /books : Crée un nouveau livre.
- GET /books/:id : Récupère un livre spécifique par son ID.
- PUT /books/:id : Modifie un livre existant.
- DELETE /books/:id : Supprime un livre.

 Auteurs

- **GET /authors** : Récupère la liste de tous les auteurs.
- **POST /authors** : Crée un nouvel auteur.
- **GET /authors/:id** : Récupère un auteur spécifique par son ID.
- **PUT /authors/:id** : Modifie un auteur existant.
- **DELETE /authors/:id** : Supprime un auteur.

 Sécurisation des Routes

Les routes concernant les livres et les auteurs sont protégées par un middleware d'authentification JWT. Vous devez envoyer un token valide dans l'en-tête de vos requêtes pour accéder à ces routes.

Exemple d'en-tête de requête avec JWT :

```plaintext
Authorization: Bearer VOTRE_JWT_TOKEN
```

Contribution

Si vous souhaitez contribuer à ce projet, voici comment procéder :

1. Fork ce repository.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. Faites vos modifications.
4. Faites un commit de vos modifications (`git commit -am 'Ajout de ma fonctionnalité'`).
5. Poussez vos modifications (`git push origin feature/ma-fonctionnalité`).
6. Créez une Pull Request.



---

 Explications du fichier `README.md` :

1. **Titre du projet** : Indique le nom de ton API (ex. "API de Gestion de Bibliothèque").
2. **Fonctionnalités** : Liste les principales fonctionnalités de ton API.
3. **Prérequis** : Mentionne les outils nécessaires pour faire fonctionner ton API, comme Node.js et MongoDB Atlas.
4. **Installation** : Étapes détaillées pour cloner le projet, installer les dépendances et configurer l'URI de MongoDB.
5. **Lancer le serveur** : Commande pour démarrer le serveur.
6. **Routes API** : Liste des différentes routes de ton API (authentification, gestion des livres et des auteurs).
7. **Sécurisation des Routes** : Explication sur la sécurisation des routes avec JWT.
8. **Contribution** : Donne des instructions pour que d'autres contributeurs puissent aider sur le projet.

