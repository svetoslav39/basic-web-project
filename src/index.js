const express = require('express');
const handlebars = require('express-handlebars');
const port = 3000
const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static('./public'));
app.get('/', function (req, res) {
    res.render("home/index");
});
app.listen(port,
    () => console.log(`Listening on port ${port}...`));