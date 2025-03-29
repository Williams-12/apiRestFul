const Book = require('../Models/bookModel');

// Création des livres
exports.createBook = async (req, res) => {
    const { title, author, genre, publishedDate } = req.body;
    try {
        const newBook = new Book({ title, author, genre, publishedDate });
        await newBook.save();
        return res.status(201).json(newBook);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la création du livre", error });
    }
};

// Récuperer tous les livres
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(books)
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de al récuperation des livres", error });
    }
};

// Lire un livre spécifique par ID
exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Livre non trouvé" });
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération du livre", error });
    }
};

// Mettre à jour un livre
exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, publishedDate } = req.body;
    try {
        const updateBook = await Book.findByIdAndUpdate(
            id,
            { title, author, genre, publishedDate },
            { new: true }
        );
        if (!updateBook) {
            return res.status(404).json({ message: "Livre non trouvé" });
        }
        return res.status(200).json(updateBook);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la mise à jour du livre", error });
    }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBook = await Book.findByIdAndDelete(id);
        if (!deleteBook) {
            return res.status(404).json({ message: 'Livre non trouvé' });
        }
        return res.status(204).json({ message: "Livre supprimé avec succès" });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la suppression de livre", error });
    };
}
