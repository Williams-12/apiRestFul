const express = require('express');
const authorController = require('../controllers/authorController');
const authMiddleware = require('../Middlewares/authMiddleware');
const router = express.Router();


// Creation d'un auteur (authenfification)
router.post('/', authMiddleware.authenticateJWT, authorController.createAuthors);

// Route pour récuperer tous les auteurs
router.get('/', authorController.getAuthors);

// Route pour récuperer un auteur par ID
router.get('/:id', authorController.getAuthorById);

// Route pour mettre à jour un auteur
router.put('/:id', authMiddleware.authenticateJWT, authorController.updateAuthor);

// Route pour supprimer un auteur
router.delete('/:id', authMiddleware.authenticateJWT, authorController.deleteAuthor);

// exportation du module
module.exports = router; 