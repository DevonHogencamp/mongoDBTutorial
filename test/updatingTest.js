var assert = require('assert');

// Bring in the MarioChar schema
var MarioChar = require('../models/mariochar');
/*
    Finding Test
*/

describe('Updating records', function () {
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
    it('Updates one record from the DB', function (done) {
        MarioChar.findOneAndUpdate({
            name: 'Mario'
        },
        {
            name: 'Luigi'
        }).then(function () {
            MarioChar.findOne({
                _id: char._id
            }).then(function (res) {
                assert(res.name === 'Luigi');
                done();
            });
        });
    });

    it('Increment weight by one', function (done) {
        MarioChar.update({}, {
            $inc: { weight: 10}
        }).then(function () {
            MarioChar.findOne({
                name: 'Mario'
            }).then(function (res) {
                assert(res.weight === 160);
                done();
            });
        });
    });
});
