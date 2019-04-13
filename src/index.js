const express = require('express');
const handlebars = require('express-handlebars');
var bodyParser = require('body-parser')
const config = require('./config/config')
const router = require('./config/routes')
const db = require('./config/database')
const app = express()


db(config)
app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }))

router(app)

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));