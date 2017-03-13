var assert = require('assert');

var mongoose = require('mongoose');

var Author = require('../models/author');

//Describee our tests
describe('Nesting Records', function (done) {
    // Drop DB before running the tests
    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(function () {
            done();
        });
    });

    //Creates tests
    it('Creates and author with sub-documents', function (done) {
        var devon = new Author({
            name: 'Devon Hogencamp',
            books: [
                {
                    title: 'Best Dev',
                    pages: 55
                },
                {
                    title: 'Program Better',
                    pages: 15
                }
            ]
        });

        devon.save().then(function () {
            Author.findOne({
                name: 'Devon Hogencamp'
            }).then(function (res) {
                assert(res.books.length === 2);
                done();
            });
        });
    });

    // Add on to the already made Author devon
    it('Adds a book to the Author devon', function (done) {
        var devon = new Author({
            name: 'Devon Hogencamp',
            books: [
                {
                    title: 'Best Dev',
                    pages: 55
                },
                {
                    title: 'Program Better',
                    pages: 15
                }
            ]
        });

        devon.save().then(function () {
            Author.findOne({
                name: 'Devon Hogencamp'
            }).then(function (res) {
                // Add a book to the books array
                res.books.push({
                    title: 'Jehovahs Qualities',
                    pages: 100
                });

                res.save().then(function () {
                    Author.findOne({
                        name: 'Devon Hogencamp'
                    }).then(function () {
                        assert(res.books.length === 3);
                        done();
                    });
                });
            });
        });
    });
});
