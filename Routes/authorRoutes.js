const express = require(`express`);
const authorController = require(`../contoleurs/authorController`);
const authMiddleware = require(`../Middlewares/authMiddleware`);
const router = express.Router();

router.get(`/`, authorController.getAuthors);
router.post(`/`, authMiddleware.authenticateJWT, authorController.createAuthor);
router.put(`/:id`, authMiddleware.authenticateJWT, authorController.updateAuthor);
router.delete(`/:id`, authMiddleware.authenticateJWT, authorController.deleteAuthor);

module.exports = router;