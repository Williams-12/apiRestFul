const Author = require('../Models/authorModel');

// Création des auteurs
exports.createAuthors = async (req, res) => {
    const { name, bio } = req.body;
    try {
        const newAuthor = new Author({ name, bio });
        await newAuthor.save();
        return res.status(201).json(newAuthor);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la création de l\'auteur", error });
    }
};

// Récuperer tous les auteus
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        return res.status(200).json(authors)
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de al récuperation des auteurs", error });
    }
};

// Lire un auteur spécifique par ID
exports.getAuthorById = async (req, res) => {
    const { id } = req.params;
    try {
        const author = await Author.findById(id);
        if (!author) {
            return res.status(404).json({ message: "Auteur non trouvé" });
        }
        return res.status(200).json(author);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération de l\'auteur", error });
    }
};

// Mettre à jour un auteur
exports.updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { name, bio } = req.body;
    try {
        const updateAuthor = await Author.findByIdAndUpdate(
            id,
            { name, bio },
            { new: true }
        );
        if (!updateAuthor) {
            return res.status(404).json({ message: "Auteur non trouvé" });
        }
        return res.status(200).json(updateAuthor);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la mise à jour de l\'auteur", error });
    }
};

// Supprimer un auteur
exports.deleteAuthor = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteAuthor = await Author.findByIdAndDelete(id);
        if (!deleteAuthor) {
            return res.status(404).json({ message: 'Auteur non trouvé' });
        }
        return res.status(200).json({ message: "Auteur supprimé avec succès" });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la suppression de l\'auteur", error });
    };
}
