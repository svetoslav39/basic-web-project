const express = require('express');
const handlebars = require('express-handlebars');
var bodyParser = require('body-parser')
const config = require('./config/config')
const articlesController = require('./controllers/articles-controler')
const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render("home/index");
});
app.get('/articles/create', articlesController.getCreate)
app.get('/articles', articlesController.postCreate)
app.post('/articles/create', (req, res) => {
    console.log(req.body)
})

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));