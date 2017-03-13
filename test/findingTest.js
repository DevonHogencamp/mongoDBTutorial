var assert = require('assert');

// Bring in the MarioChar schema
var MarioChar = require('../models/mariochar');
/*
    Finding Test
*/

describe('Finding records', function () {
    // Make this var global so we can access it anywhere
    var char;

    beforeEach(function (done) {
        // Create an instance of the MarioChar schema
        char = new MarioChar({
            name: "Mario",
            weight: 150
        });

        // Save that instance, then when that finishes
        char.save().then(function () {
            // Checks to see if the char is put into the db
            assert(char.isNew === false);

            // Tell mocha we are done
            done();
        });
    });
    // Create tests
    // done is used to tell mocha we are done with our test in async code
    it('Finds one record from the DB', function (done) {
        MarioChar.findOne({
            name: 'Mario'
        }).then(function (res) {
            assert(res.name === 'Mario');
            done();
        });
    });

    it('Finds one record by ObjectID from the DB', function (done) {
        MarioChar.findOne({
            _id: char._id
        }).then(function (res) {
            // toString is used so that we can convert the _id which is an object to a string
            assert(res._id.toString() === char._id.toString());
            done();
        });
    });
});
