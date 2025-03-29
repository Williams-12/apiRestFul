const mongoose = require('mongoose');

// Schema de l'auteur
const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
});
// Model de l'auteur
const Author = mongoose.model('Author', authorSchema);

// exportation du module
module.exports = Author;