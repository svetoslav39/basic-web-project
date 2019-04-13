const articlesController = require('../controllers/articles-controler')
const authorController = require('../controllers/authors-controler')
function router(app) {
    app.get('/', (req, res) => {
        res.render("home/index");
    });
    app.get('/articles', articlesController.articleIndex)
    app.get('/articles/create', articlesController.getCreate)
    app.post('/articles/create', articlesController.postCreate)
    app.get('/authors', authorController.index)
    app.get('/authors/:author/articles', articlesController.getByAuthor)
}
module.exports = router