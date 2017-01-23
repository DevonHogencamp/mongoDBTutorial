// Pulling in Mongoose module
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function () {
    console.log('Connection has been made!');
}).on('error', function (err) {
    console.log('Connection error: ' + err);
});
