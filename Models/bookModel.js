const mongoose = require('mongoose');

// Schema du livre
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    genre: { type: String, required: true },
    publishedDate: { type: Date, required: true },
});

// model du livre
const Book = mongoose.model('Book', bookSchema)
// exportation du module
module.exports = Book;