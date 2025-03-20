const Book = require(`../Models/bookModel`);

exports.createBook = async (req, res) => {
    const { title, author, genre, publishedDate } = req.body;
    try {
        const newBook = new Book({ title, author, genre, publishedDate });
        await newBook.save();
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la création du livre`, error });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().populate(`author`);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération des livres`, error });
    }
}

exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id).populate(`author`);
        if (!book) {
            return res.status(400).json({ message: `Livre non trouvé` })
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération du livre`, error });
    }
};

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, publishedDate } = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { title, author, genre, publishedDate },
            { new: true }
        );
        if (!updatedBook) {
            return res.status(400).json({ message: `Livre non trouvé` })
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        return res.status(500).json({ message: `La mise à jour du livre a échoué`, error })
    }
}

exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(400).json({ message: `Livre non trouvé` })
        }
        res.status(200).json({ message: `Livre supprimé avec succès` });
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la suppression du livre`, err });
    }
}