const Author = require(`../Models/authorModel`);

exports.createAuthor = async (req, res) => {
    const { name, bio } = req.body;
    try {
        const newAuthor = new Author({ name, bio });
        await newAuthor.save();
        res.status(200).json(newAuthor);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la création de l'auteur`, error });
    }
};
// Lire tous les auteurs
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la mise à jour de l'auteur`, err })
    }
};


exports.updateAuthor = async (req , res) => {
    const { id } = req.params;
    const { name, bio } = req.body;
    try {
        const updatedAuthor= await Author.findByIdAndUpdate(
            id,
            {name, bio},
            {new: true}
        );
        if(!updatedAuthor){
            return res.status(404).json({message: `Auteur non trouvé`});
        }
        res.status(200).json(updatedAuthor)
    } catch (error) {
        res.status(500).json({message:`Erreur lors de la mise à jours du livre`})
    }
}

exports.deleteAuthor = async (req, res) => {
    const { id } = res.params;
    try {
        const deleteAuthor = await Author.findByIdAndDelete(id);
        if (!deleteAuthor) {
            returnres.status(400).json({ message: `Auteur non trouvé` });
        }
        res.status(200).json({ message: `Auteur supprimé avec succes` });
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la suppression de l'auteur`, err });
    }
};