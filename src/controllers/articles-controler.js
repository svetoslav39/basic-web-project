const Article = require('../models/article')
module.exports = {
    getCreate: (req, res) => {
        res.render('articles/create')
    },
    postCreate: (req, res) => {
        console.log(req.body)
        let article = new Article({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        })
        article.save((err, dbArticle) => {

            res.redirect('/articles')
        })

    }
}