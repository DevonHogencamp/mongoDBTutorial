// Pulling in Mongoose module
var mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the DB before tests run
before(function (done) {
    // Connect to MongoDB
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function () {
        console.log('Connection has been made!');

        done();
    }).on('error', function (err) {
        console.log('Connection error: ' + err);
    });
});
