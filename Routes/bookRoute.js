const express = require('express');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();

// Route pour créer un livre (protégée par JWT)
router.post('/', authMiddleware.authenticateJWT, bookController.createBook)

// Route pour récuperer tous les livres
router.get('/', bookController.getBooks);

// Route pour récupérer un livre par ID
router.get('/:id', bookController.getBookById);

// Route pour modifier un livre (protégée par JWT)
router.put('/:id', authMiddleware.authenticateJWT, bookController.updateBook);

// Route pour supprimer un livre (protégée par JWT)
router.delete('/:id', authMiddleware.authenticateJWT, bookController.deleteBook);

// exportation du module
module.exports = router;