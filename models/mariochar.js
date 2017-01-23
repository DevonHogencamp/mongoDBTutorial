// Require Monoose module
var mongoose = require('mongoose');

// Require Mongoose Schema
var Schema = mongoose.Schema;

// Our Schema for Mario
var MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

// Create the model MarioChar that uses the MarioCharSchema and makes a mariochar in the mariochar collection
var MarioChar = mongoose.model('mariochar', MarioCharSchema);

// Export our model
module.exports = MarioChar;
