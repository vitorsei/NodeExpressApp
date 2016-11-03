var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'How to Fail at Almost Everything and Still Win Big',
        genre: 'Nonfiction',
        author: 'Scott Adams',
        bookId: 17859574,
        read: false
    },
    {
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        genre: 'Programming',
        author: 'Robert C. Martin',
        bookId: 3735293,
        read: false
    },
    {
        title: 'Zero to One: Notes on Startups, or How to Build the Future',
        genre: 'Business',
        author: 'Peter Thiel',
        bookId: 18050143,
        read: false
    },
    {
        title: 'Thinking, Fast and Slow',
        genre: 'Science',
        author: 'Daniel Kahneman',
        bookId: 11468377,
        read: false
    },
    {
        title: 'The Rosie Project',
        genre: 'Novel',
        author: 'Graeme Simsion',
        bookId: 16181775,
        read: false
    },
    {
        title: 'Influence: The Psychology of Persuasion',
        genre: 'Psychology',
        author: 'Robert Cialdini',
        bookId: 28815,
        read: false
    },
    {
        title: 'The Pragmatic Programmer',
        genre: 'Programming',
        author: 'Andrew Hunt, Dave Thomas',
        bookId: 4099,
        read: false
    },
    {
        title: 'Mindset: The New Psychology of Success',
        genre: 'Psychology',
        author: 'Carol Dweck',
        bookId: 40745,
        read: false
    }
];

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    }
                );

            });

            //res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;