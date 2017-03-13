// Require Monoose module
var mongoose = require('mongoose');

// Require Mongoose Schema
var Schema = mongoose.Schema;

// Our Schema for Books
var BookSchema = new Schema({
    title: String,
    pages: Number
});

// Our Schema for Authors
var AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

// Create the model Author that uses the AuthorSchema and makes a author in the auhtors collection
var Author = mongoose.model('author', AuthorSchema);

// Export our model
module.exports = Author;
