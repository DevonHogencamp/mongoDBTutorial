var assert = require('assert');

var mongoose = require('mongoose');

var Author = require('../models/author');

//Describee our tests
describe('Nesting Records', function (done) {
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
});
