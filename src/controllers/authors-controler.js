const Article = require('../models/article')

module.exports = {
    index: (req, res) => {
        Article.find().distinct('author', (err, authors) => {
            res.render('authors/index', { authors: authors })
        })
    }
}