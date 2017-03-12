var assert = require('assert');

// Bring in the MarioChar schema
var MarioChar = require('../models/mariochar');
/*
    Just a demo test for mocha
*/

describe('Saving records', function () {
    // Create tests
    // done is used to tell mocha we are done with our test in async code
    it('Saves a record to the database', function (done) {
        // Create an instance of the MarioChar schema
        var char = new MarioChar({
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
});
