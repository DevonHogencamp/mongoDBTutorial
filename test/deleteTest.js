var assert = require('assert');

// Bring in the MarioChar schema
var MarioChar = require('../models/mariochar');
/*
    Finding Test
*/

describe('Deleting records', function () {
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
    it('Deletes one record from the DB', function (done) {
        MarioChar.findOneAndRemove({
            name: 'Mario'
        }).then(function () {
            MarioChar.findOne({
                name: 'Mario'
            }).then(function (res) {
                assert(res === null);
                done();
            });
        });
    });
});
