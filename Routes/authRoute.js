const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Route pour s'enregistrer
router.post('/register', authController.register);

// Route pour se connecter
router.post('/login', authController.login);

// exportation du module
module.exports = router;