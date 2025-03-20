const express = require(`express`);
const bookController = require(`../contoleurs/bookController`);
const authMiddleware = require(`../Middlewares/authMiddleware`);

const router = express.Router();

router.post(`/`, authMiddleware.authenticateJWT, bookController.createBook);
router.get(`/`, bookController.getBooks);
router.get(`/:id`, bookController.getBookById);
router.put(`/:id`, authMiddleware.authenticateJWT, bookController.updateBook);
router.delete(`/:id`, authMiddleware.authenticateJWT, bookController.deleteBook);

module.exports = router;